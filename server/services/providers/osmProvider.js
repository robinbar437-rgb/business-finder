/**
 * OpenStreetMap (Nominatim & Overpass API) Provider.
 * Free live real-world POI / business directory that does not require any paid API key.
 */

import { normalizeBusiness } from "../normalizer.js";

/**
 * Search live businesses from OpenStreetMap using Nominatim search API.
 * Uses standard OpenStreetMap public search endpoint with user-agent header.
 */
export async function searchOsmBusinesses(query = "", location = "") {
  try {
    const fullQuery = [query, location].filter(Boolean).join(" ");
    if (!fullQuery) return [];

    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", fullQuery);
    url.searchParams.set("format", "json");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("extratags", "1");
    url.searchParams.set("limit", "25");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const response = await fetch(url.toString(), {
      signal: controller.signal,
      headers: {
        "User-Agent": "BusinessFinder-MVP/1.0 (educational-web-app)"
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    if (!Array.isArray(data)) return [];

    return data
      .filter((item) => {
        // Filter out pure streets or administrative boundaries, prioritize amenities, shops, offices, tourism
        const type = item.type || "";
        const category = item.category || "";
        const extra = item.extratags || {};
        return (
          extra.website ||
          extra.phone ||
          item.namedetails ||
          category === "amenity" ||
          category === "shop" ||
          category === "tourism" ||
          category === "leisure" ||
          category === "office" ||
          category === "healthcare" ||
          type.includes("clinic") ||
          type.includes("hospital") ||
          type.includes("restaurant") ||
          type.includes("hotel") ||
          type.includes("gym")
        );
      })
      .map((item) => {
        const extra = item.extratags || {};
        const raw = {
          name: item.display_name ? item.display_name.split(",")[0] : item.name,
          website: extra.website || extra["contact:website"] || extra.url || null,
          phone: extra.phone || extra["contact:phone"] || null,
          email: extra.email || extra["contact:email"] || null,
          instagram: extra["contact:instagram"] || null,
          facebook: extra["contact:facebook"] || null
        };
        return normalizeBusiness(raw);
      });
  } catch (error) {
    // If live network call times out or fails, gracefully return empty array so fallback can trigger
    return [];
  }
}
