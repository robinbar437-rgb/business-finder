import { queryRawMockData } from './mockData.js';
import { normalizeBusiness } from './normalizer.js';

/**
 * Fetches real business data from OpenStreetMap Overpass API (No API key required)
 * Matches businesses by name or amenity/shop/healthcare tags within a city/area.
 */
async function fetchFromOpenStreetMap(query, location) {
  const cleanQuery = (query || '').trim();
  const cleanLoc = (location || '').trim();

  // If no location, we limit the search or fall back
  if (!cleanLoc) {
    return [];
  }

  // Construct Overpass QL query for the specified city/area
  // Looks for nodes and ways tagged with relevant shop/amenity/healthcare/tourism
  const overpassQuery = `
    [out:json][timeout:15];
    area["name"~"${cleanLoc}",i]->.searchArea;
    (
      node["name"](area.searchArea);
      way["name"](area.searchArea);
    );
    out tags 40;
  `;

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;
  
  const response = await fetch(url, {
    headers: { 'User-Agent': 'BusinessFinder-MVP/1.0' }
  });

  if (!response.ok) {
    throw new Error(`OpenStreetMap Overpass API returned status ${response.status}`);
  }

  const data = await response.json();
  const elements = data.elements || [];

  // Filter elements matching the query (e.g., dental, restaurant, hotel, gym, salon)
  const queryLower = cleanQuery.toLowerCase();
  const filtered = elements.filter(el => {
    const tags = el.tags || {};
    const name = (tags.name || '').toLowerCase();
    const amenity = (tags.amenity || '').toLowerCase();
    const shop = (tags.shop || '').toLowerCase();
    const healthcare = (tags.healthcare || '').toLowerCase();
    const tourism = (tags.tourism || '').toLowerCase();

    return (
      name.includes(queryLower) ||
      amenity.includes(queryLower) ||
      shop.includes(queryLower) ||
      healthcare.includes(queryLower) ||
      tourism.includes(queryLower)
    );
  });

  // Map OpenStreetMap tags to raw business format
  return filtered.map(el => {
    const tags = el.tags || {};
    return {
      name: tags.name,
      website: tags.website || tags['contact:website'] || null,
      phone: tags.phone || tags['contact:phone'] || null,
      email: tags.email || tags['contact:email'] || null,
      facebook: tags['contact:facebook'] || tags.facebook || null,
      instagram: tags['contact:instagram'] || tags.instagram || null,
      city: cleanLoc
    };
  });
}

/**
 * Optional Google Places API provider (if GOOGLE_PLACES_API_KEY is configured in .env)
 */
async function fetchFromGooglePlaces(query, location, apiKey) {
  const textQuery = `${query} in ${location}`.trim();
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(textQuery)}&key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google Places API returned status ${response.status}`);
  }

  const data = await response.json();
  const results = data.results || [];

  // Fetch details for each place to get website, phone, etc.
  const detailedBusinesses = await Promise.all(
    results.slice(0, 10).map(async (place) => {
      try {
        const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,website,formatted_phone_number&key=${apiKey}`;
        const detailRes = await fetch(detailUrl);
        const detailData = await detailRes.json();
        const details = detailData.result || {};
        return {
          name: details.name || place.name,
          website: details.website || null,
          phone: details.formatted_phone_number || null,
          email: null,
          socials: [],
          city: location
        };
      } catch {
        return {
          name: place.name,
          website: null,
          phone: null,
          email: null,
          socials: [],
          city: location
        };
      }
    })
  );

  return detailedBusinesses;
}

/**
 * Main service function to search businesses
 * Architecture:
 * 1. If Google Places API key provided -> use Google Places API
 * 2. Else attempt OpenStreetMap Overpass API (live real provider, no key needed)
 * 3. If live provider returns 0 results or fails -> fallback to mock dataset
 * 4. Pass all results through the normalization layer
 */
export async function searchBusinesses(query = '', location = '') {
  const googleApiKey = process.env.GOOGLE_PLACES_API_KEY;
  let rawBusinesses = [];

  // 1. Try Google Places if key is present
  if (googleApiKey && googleApiKey !== 'your_google_places_api_key_here') {
    try {
      rawBusinesses = await fetchFromGooglePlaces(query, location, googleApiKey);
    } catch (err) {
      console.warn('Google Places API call failed, falling back:', err.message);
    }
  }

  // 2. Try OpenStreetMap (Free, real live data, no key needed)
  if (rawBusinesses.length === 0 && location) {
    try {
      rawBusinesses = await fetchFromOpenStreetMap(query, location);
    } catch (err) {
      console.warn('OpenStreetMap query failed or timed out, falling back to mock dataset:', err.message);
    }
  }

  // 3. If no live results found (e.g. offline, rate-limited, or development mode), use mock dataset
  if (rawBusinesses.length === 0) {
    rawBusinesses = queryRawMockData(query, location);
  }

  // 4. Normalize all results to ensure consistent frontend schema
  const normalized = rawBusinesses.map(item => normalizeBusiness(item));

  return normalized;
}
