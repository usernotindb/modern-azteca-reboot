
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add mobile viewport meta tag dynamically
const setViewportMeta = () => {
  const viewport = document.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover';
  document.head.appendChild(viewport);
};

// Execute before rendering
setViewportMeta();

// Render the app
createRoot(document.getElementById("root")!).render(<App />);
