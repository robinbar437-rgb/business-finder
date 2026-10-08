/**
 * Data Normalization Layer
 * Converts raw business data from various APIs or mock providers
 * into a consistent, standard schema expected by the frontend.
 *
 * Target schema:
 * {
 *   name: string,
 *   website: string | null,
 *   socials: Array<{ platform: string, url: string }>,
 *   phone: string | null,
 *   email: string | null
 * }
 */

// Helper to determine if a URL is actually a social media page rather than an official website
function isSocialMediaUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const lower = url.toLowerCase();
  return (
    lower.includes('facebook.com') ||
    lower.includes('fb.com') ||
    lower.includes('instagram.com') ||
    lower.includes('tiktok.com') ||
    lower.includes('twitter.com') ||
    lower.includes('x.com') ||
    lower.includes('linkedin.com') ||
    lower.includes('youtube.com')
  );
}

// Helper to identify platform name from URL
function detectPlatform(url) {
  const lower = url.toLowerCase();
  if (lower.includes('instagram.com')) return 'Instagram';
  if (lower.includes('facebook.com') || lower.includes('fb.com')) return 'Facebook';
  if (lower.includes('tiktok.com')) return 'TikTok';
  if (lower.includes('linkedin.com')) return 'LinkedIn';
  if (lower.includes('twitter.com') || lower.includes('x.com')) return 'Twitter';
  return 'Social';
}

/**
 * Normalizes raw business records from any data source into the standard contract
 * @param {Object} raw - Raw business object from provider
 * @returns {Object} Normalized business object
 */
export function normalizeBusiness(raw = {}) {
  // 1. Business Name
  const name = (raw.name || raw.title || raw.business_name || '').trim() || 'Unknown Business';

  // 2. Website & Social Media
  let website = raw.website || raw.url || raw.link || raw.website_url || null;
  const socials = [];

  // If socials already provided as an array
  if (Array.isArray(raw.socials)) {
    raw.socials.forEach(s => {
      if (typeof s === 'string' && s.trim()) {
        socials.push({ platform: detectPlatform(s), url: s.trim() });
      } else if (typeof s === 'object' && s && s.url) {
        socials.push({
          platform: s.platform || detectPlatform(s.url),
          url: s.url.trim()
        });
      }
    });
  }

  // If specific social fields exist
  if (raw.instagram || raw['contact:instagram']) {
    const ig = raw.instagram || raw['contact:instagram'];
    const igUrl = ig.startsWith('http') ? ig : `https://instagram.com/${ig.replace('@', '')}`;
    socials.push({ platform: 'Instagram', url: igUrl });
  }

  if (raw.facebook || raw['contact:facebook']) {
    const fb = raw.facebook || raw['contact:facebook'];
    const fbUrl = fb.startsWith('http') ? fb : `https://facebook.com/${fb}`;
    socials.push({ platform: 'Facebook', url: fbUrl });
  }

  // IMPORTANT RULE: Do not assume that a Facebook or Instagram page counts as a website.
  // If the website field is actually a social link, move it to socials and mark website as null.
  if (website && isSocialMediaUrl(website)) {
    if (!socials.some(s => s.url === website)) {
      socials.push({ platform: detectPlatform(website), url: website.trim() });
    }
    website = null;
  }

  // Clean empty string or invalid website to null
  if (website && typeof website === 'string') {
    website = website.trim();
    if (!website || website === 'null' || website === 'undefined') {
      website = null;
    }
  } else {
    website = null;
  }

  // 3. Phone number
  let phone = raw.phone || raw.telephone || raw.phone_number || raw['contact:phone'] || null;
  if (phone && typeof phone === 'string') {
    phone = phone.trim();
    if (!phone || phone === 'null' || phone === 'undefined') phone = null;
  } else {
    phone = null;
  }

  // 4. Email address
  let email = raw.email || raw.email_address || raw['contact:email'] || null;
  if (email && typeof email === 'string') {
    email = email.trim();
    if (!email || email === 'null' || email === 'undefined') email = null;
  } else {
    email = null;
  }

  return {
    name,
    website,
    socials,
    phone,
    email,
    location: raw.location || raw.city || null
  };
}
