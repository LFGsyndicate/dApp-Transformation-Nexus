
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a grid pattern CSS class for backgrounds and optimize for mobile
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
      padding-left: 1rem !important;
      padding-right: 1rem !important;
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
    
    /* Improve card layouts on mobile */
    .grid {
      grid-template-columns: 1fr !important;
    }
    
    /* Improve button touch targets */
    button, a.btn, .btn {
      padding: 0.75rem 1rem !important;
    }
    
    /* Fix spacing issues on mobile */
    .mb-16 {
      margin-bottom: 3rem !important;
    }
  }
  
  /* SEO meta tag optimization */
  :root {
    color-scheme: light dark;
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
  
  /* Fix cumulative layout shift */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  /* Improve text readability */
  @media (max-width: 640px) {
    p, li {
      font-size: 0.95rem !important;
      line-height: 1.6 !important;
    }
  }
`;

// Add meta tags for SEO
const metaTags = [
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
  { name: 'description', content: 'Исследование трансформирующего потенциала технологий Web3 и их синергии с ИИ - блокчейн, смарт-контракты, DAO и их применение в современном бизнесе.' },
  { name: 'theme-color', content: '#ffffff' },
  { property: 'og:title', content: 'Web3 в действии | Каталог децентрализованных решений' },
  { property: 'og:description', content: 'Исследование трансформирующего потенциала технологий Web3 и их синергии с ИИ. Более 500 примеров использования.' },
  { property: 'og:type', content: 'website' },
];

metaTags.forEach(({ name, content, property }) => {
  const meta = document.createElement('meta');
  if (name) meta.setAttribute('name', name);
  if (property) meta.setAttribute('property', property);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
});

document.head.appendChild(styleElement);

// Create a manifest link
const manifestLink = document.createElement('link');
manifestLink.rel = 'manifest';
manifestLink.href = '/manifest.json';
document.head.appendChild(manifestLink);

// Create a favicon link
const favicon = document.createElement('link');
favicon.rel = 'shortcut icon';
favicon.type = 'image/x-icon';
favicon.href = '/favicon.ico';
document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(<App />);
