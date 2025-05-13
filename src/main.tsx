
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a grid pattern CSS class for backgrounds
const styleElement = document.createElement('style');
styleElement.textContent = `
  .bg-grid-pattern {
    background-size: 20px 20px;
    background-image: 
      linear-gradient(to right, rgba(127, 127, 127, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(127, 127, 127, 0.1) 1px, transparent 1px);
  }
`;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(<App />);
