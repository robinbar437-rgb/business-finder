import { filterClientMock, clientMockBusinesses } from "./mockData.js";

const BACKEND_URL = "/api";

/**
 * Fetch businesses from Express backend with client-side fallback if backend is offline.
 *
 * @param {string} query - Business type (e.g. "Dental clinics")
 * @param {string} location - Location (e.g. "Hetauda")
 * @returns {Promise<Array>} Array of normalized business objects
 */
export async function fetchBusinesses(query = "", location = "") {
  try {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (location) params.set("location", location);

    const endpoint = `${BACKEND_URL}/businesses?${params.toString()}`;
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.warn("Backend request failed, falling back to local mock data:", err.message);

    // Provide seamless client fallback for Phase 1 / Phase 2 testing
    if (!query && !location) {
      return clientMockBusinesses;
    }
    return filterClientMock(query, location);
  }
}
