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

// Parse JSON request body
app.use(express.json());

// API routes
app.use('/api', contactApi);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by sending the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
