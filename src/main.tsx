
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

  /* Add responsive optimizations for mobile */
  @media (max-width: 640px) {
    html, body {
      font-size: 14px;
    }
    
    .container-content {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    h1 {
      font-size: 1.75rem !important;
      line-height: 1.2 !important;
    }
    
    h2 {
      font-size: 1.5rem !important;
    }
    
    .bg-grid-pattern {
      background-size: 15px 15px;
    }
  }
  
  /* Improve image loading */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  /* Improve tap targets for mobile */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
`;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(<App />);
