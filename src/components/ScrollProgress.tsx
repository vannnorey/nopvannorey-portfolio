import { useEffect, useState, useCallback } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const circumference = 2 * Math.PI * 16; // circle r=16
  const dashOffset = circumference * (1 - progress);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
        <div
          className="h-full origin-left transition-transform duration-150"
          style={{
            transform: `scaleX(${progress})`,
            background:
              "linear-gradient(90deg, #6EAEDC, #427396, #6EAEDC)",
          }}
        />
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed bottom-8 right-8 z-50
          w-12 h-12 rounded-full
          backdrop-blur-xl bg-white/5
          border border-[#6EAEDC]/20
          flex items-center justify-center
          hover:scale-105 transition-transform scroll-glow
        "
      >
        <svg
          className="-rotate-90"
          width="36"
          height="36"
          viewBox="0 0 36 36"
        >
          {/* Background circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="rgba(110,174,220,0.25)"
            strokeWidth="2"
          />

          {/* Progress circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#6EAEDC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{
              transition: "stroke-dashoffset 0.15s ease-out",
            }}
          />
        </svg>
      </button>
    </>
  );
}
