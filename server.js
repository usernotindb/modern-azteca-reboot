
import 'dotenv/config';
import express from 'express';
import path from 'path';
import compression from 'compression';
import { fileURLToPath } from 'url';
import contactApi from './src/api/contactApi.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3235;

// Enable compression for all responses
app.use(compression());

// Parse JSON request body - this must come before API routes
app.use(express.json());

// Trust proxy for correct IP addresses in rate limiting
app.set('trust proxy', 1);

// API routes - these must come BEFORE static file serving
app.use('/api', contactApi);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all non-API routes by sending the index.html file (SPA fallback)
app.get('*', (req, res) => {
  // Don't serve HTML for API routes that might not exist
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
