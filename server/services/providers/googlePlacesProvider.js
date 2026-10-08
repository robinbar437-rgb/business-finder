/**
 * Google Places API Provider.
 * Connects to Google Places Text Search and Details APIs when an API key is configured.
 */

import { normalizeBusiness } from "../normalizer.js";

export async function searchGooglePlaces(query = "", location = "", apiKey = "") {
  if (!apiKey) {
    throw new Error("GOOGLE_PLACES_API_KEY is not configured.");
  }

  const fullQuery = [query, location].filter(Boolean).join(" in ");
  if (!fullQuery) return [];

  const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(fullQuery)}&key=${apiKey}`;

  const res = await fetch(searchUrl);
  if (!res.ok) {
    throw new Error(`Google Places API returned HTTP ${res.status}`);
  }

  const data = await res.json();
  if (!data.results || !Array.isArray(data.results)) {
    return [];
  }

  // Fetch place details for top results to obtain website and phone number
  const topResults = data.results.slice(0, 10);
  const detailedResults = await Promise.all(
    topResults.map(async (place) => {
      try {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,website,formatted_phone_number,international_phone_number&key=${apiKey}`;
        const detailRes = await fetch(detailsUrl);
        const detailData = await detailRes.json();
        const details = detailData.result || {};

        return normalizeBusiness({
          name: details.name || place.name,
          website: details.website || null,
          phone: details.formatted_phone_number || details.international_phone_number || null,
          email: null, // Google Places does not return email
          socials: []
        });
      } catch (err) {
        return normalizeBusiness({
          name: place.name,
          website: null,
          phone: null,
          email: null,
          socials: []
        });
      }
    })
  );

  return detailedResults;
}
