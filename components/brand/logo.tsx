interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-7 h-7", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        {/* Modern K mark — two clean paths */}
        <path
          d="M8 4v24"
          stroke="url(#logo-grad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M14 16L26 5"
          stroke="url(#logo-grad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M14 16L26 27"
          stroke="#a78bfa"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <span className="text-[15px] font-semibold text-foreground tracking-[0.04em]">
          Kovio
        </span>
      )}
    </div>
  );
}
