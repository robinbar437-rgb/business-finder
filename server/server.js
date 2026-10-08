import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import businessRoutes from './routes/businesses.js';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing for the React frontend
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// API Routes
app.use('/api/businesses', businessRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Business Finder API' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Business Finder server running on http://localhost:${PORT}`);
});
