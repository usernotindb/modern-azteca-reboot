
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add meta viewport tag to ensure proper mobile rendering
const setViewportMeta = () => {
  // Check if the viewport meta tag already exists
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  
  // If it doesn't exist, create and insert it
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMeta);
  } else {
    // If it exists but doesn't have the correct content, update it
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  }
};

// Set the viewport meta tag
setViewportMeta();

createRoot(document.getElementById("root")!).render(<App />);
