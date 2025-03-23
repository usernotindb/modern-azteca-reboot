
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3235;

// Enable compression for all responses
app.use(compression());

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
