import React from 'react';

export const SocialLink = ({ href, icon }) => {
  if (!href || href === '#') return null;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
};
