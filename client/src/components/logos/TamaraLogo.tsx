export const TamaraLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Tamara Brand Color - Orange/Gold */}
    <rect width="200" height="200" rx="40" fill="#FF6B35" />
    
    {/* Letter T */}
    <path
      d="M 50 60 L 150 60 L 150 80 L 110 80 L 110 140 L 90 140 L 90 80 L 50 80 Z"
      fill="white"
    />
    
    {/* Decorative circle accent */}
    <circle cx="160" cy="50" r="15" fill="white" opacity="0.8" />
  </svg>
);
