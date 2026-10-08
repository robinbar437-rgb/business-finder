/**
 * Express router for business search endpoints.
 */

import { Router } from "express";
import { getBusinesses } from "../services/businessService.js";

const router = Router();

/**
 * GET /api/businesses
 * Query params:
 *  - query: string (e.g. "Dental clinics")
 *  - location: string (e.g. "Hetauda")
 */
router.get("/businesses", async (req, res) => {
  try {
    const { query = "", location = "" } = req.query;

    const businesses = await getBusinesses({
      query: String(query),
      location: String(location)
    });

    res.json(businesses);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    // User-friendly error message, raw errors kept in server log
    res.status(500).json({
      error: "Something went wrong while finding businesses. Please try again."
    });
  }
});

export default router;
