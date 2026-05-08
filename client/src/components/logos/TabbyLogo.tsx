export const TabbyLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Tabby Brand Color - Purple/Violet */}
    <rect width="200" height="200" rx="40" fill="#7C3AED" />
    
    {/* Stylized T shape - modern design */}
    <g fill="white">
      {/* Top horizontal bar */}
      <rect x="40" y="50" width="120" height="20" rx="10" />
      
      {/* Vertical bar */}
      <rect x="85" y="70" width="30" height="70" rx="15" />
      
      {/* Bottom accent dots */}
      <circle cx="60" cy="155" r="8" />
      <circle cx="140" cy="155" r="8" />
    </g>
  </svg>
);
