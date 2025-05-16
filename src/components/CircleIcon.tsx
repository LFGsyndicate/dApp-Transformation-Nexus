
import React from 'react';

export type CircleIconName = 
  'purple-light' | 'purple-medium' | 'cream' | 
  'orange' | 'lavender' | 'pink' | 'olive' | 'blue-light' | 'mint' | 'green-light' | 'sage';

type CircleIconProps = {
  name: CircleIconName;
  className?: string;
  size?: number | string;
};

const iconPaths: Record<CircleIconName, string> = {
  'purple-light': 'lovable-uploads/045f3fb5-6787-4656-bcf1-70e53b120f5d.png',
  'purple-medium': 'lovable-uploads/54c127bf-6151-4419-be18-76128ef194ba.png',
  'cream': 'lovable-uploads/d198fef0-7b28-4461-a9f5-f7e45c4bf83d.png',
  'orange': 'lovable-uploads/6e41ce51-1c67-40e2-85fe-157f2fa3c9b8.png',
  'lavender': 'lovable-uploads/ae48142d-57c8-45c8-9538-f58ce9d9f56e.png',
  'pink': 'lovable-uploads/5de8e296-afed-4cd3-86cd-c68f8fee5270.png',
  'olive': 'lovable-uploads/9f165c37-c345-466c-b837-8122d08aab31.png',
  'blue-light': 'lovable-uploads/feee8464-f074-4061-b268-0278b2665f3d.png',
  'mint': 'lovable-uploads/cf379fce-90ff-487b-9c84-48b8104d87ff.png',
  'green-light': 'lovable-uploads/353adc62-1f4d-454e-9ed5-9dd4bccba724.png',
  'sage': 'lovable-uploads/77f08cda-bf88-4e3f-be04-edbb4ac8053f.png',
};

export const CircleIcon: React.FC<CircleIconProps> = ({ name, className = "", size = 24 }) => {
  // Get base path from environment
  const basePath = import.meta.env.VITE_BASE_PATH || '/';
  
  // Handle path correctly for GitHub Pages
  const iconPath = basePath.endsWith('/') 
    ? `${basePath}${iconPaths[name]}`
    : `${basePath}/${iconPaths[name]}`;
  
  return (
    <div 
      className={`relative inline-block ${className}`} 
      style={{ width: size, height: size }}
    >
      <img 
        src={iconPath} 
        alt={`Circle icon - ${name}`}
        className="w-full h-full object-contain" 
        loading="lazy" // Add lazy loading for better performance
      />
    </div>
  );
};
