import { ReactNode, useRef, useState } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const base =
    "relative inline-flex items-center justify-center rounded-xl overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-[#6EAEDC]/90 to-[#427396]/90 border border-[#6EAEDC]/30 text-white shadow-lg shadow-[#6EAEDC]/30",
    ghost:
      "px-6 py-3 backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#6EAEDC]/30",
  };

  const Content = (
    <div
      className="relative z-10 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      {/* ISO reflection */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-60 pointer-events-none" />

      {/* Orbit glow */}
      <div className="absolute -inset-8 opacity-0 group-hover:opacity-100 animate-orbit">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#6EAEDC] rounded-full blur-sm shadow-[0_0_10px_rgba(110,174,220,0.8)]" />
      </div>

      {/* Button content */}
      <div className="relative flex items-center gap-2 px-6 py-3">
        {children}
      </div>

      {/* Hover sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sweep pointer-events-none" />
    </div>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {/* Border glow */}
        <div className="absolute -inset-[1px] rounded-xl blur-md opacity-0 group-hover:opacity-100 animate-border-glow -z-10" />
        {Content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {/* Border glow */}
      <div className="absolute -inset-[1px] rounded-xl blur-md opacity-0 group-hover:opacity-100 animate-border-glow -z-10" />
      {Content}
    </button>
  );
}
