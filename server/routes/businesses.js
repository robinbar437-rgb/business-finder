import express from 'express';
import { searchBusinesses } from '../services/businessService.js';

const router = express.Router();

/**
 * GET /api/businesses
 * Query parameters:
 *  - query: string (e.g. "Dental clinics", "Restaurants")
 *  - location: string (e.g. "Hetauda", "Kathmandu")
 */
router.get('/', async (req, res) => {
  try {
    const { query = '', location = '' } = req.query;

    const businesses = await searchBusinesses(query, location);

    return res.json({
      success: true,
      count: businesses.length,
      businesses
    });
  } catch (error) {
    // Log internal error for server monitoring, but do not expose raw error to client
    console.error('Error fetching businesses:', error.message);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while finding businesses. Please try again.'
    });
  }
});

export default router;
