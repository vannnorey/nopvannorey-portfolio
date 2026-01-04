import { ReactNode, useRef, useState } from "react";

type Variant = "primary" | "ghost";
type Shape = "full" | "xl" | "2xl";

interface GlassButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  size?: "sm" | "md" | "lg";
  shape?: Shape;
}

export function GlassButton({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  size = "md",
  shape = "full",
}: GlassButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  /* Magnetic effect (desktop only) */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) {
      setOffset({ x: dx * 0.2, y: dy * 0.2 });
    }
  };

  const reset = () => {
    setOffset({ x: 0, y: 0 });
    setHovered(false);
  };

  /* Size & shape */
  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const shapeClass: Record<Shape, string> = {
    full: "rounded-full",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
  };

  const base =
    `relative inline-flex items-center gap-2 ${sizeClasses[size]} ${shapeClass[shape]}
     overflow-hidden group select-none cursor-pointer
     transition-transform duration-200
     hover:scale-105 active:scale-95`;

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-[#6EAEDC]/20 to-[#427396]/20 border-2 border-[#6EAEDC]/40 text-white",
    ghost:
      "bg-white/8 border-2 border-white/15 text-white hover:border-[#6EAEDC]/40",
  };

  const Content = (
    <>
      {/* Glass base */}
      <div
        className={`absolute inset-0 ${shapeClass[shape]} pointer-events-none`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Secondary reflection */}
      <div
        className={`absolute inset-0 ${shapeClass[shape]} opacity-60 pointer-events-none`}
        style={{
          background:
            variant === "primary"
              ? "linear-gradient(135deg, rgba(110,174,220,0.2) 0%, transparent 50%, rgba(66,115,150,0.15) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)",
        }}
      />

      {/* Outer glow */}
      <div
        className={`absolute -inset-[2px] ${shapeClass[shape]} blur-xl -z-10
          ${hovered ? "animate-glass-glow-strong" : "animate-glass-glow"}`}
        style={{
          background:
            variant === "primary"
              ? "linear-gradient(135deg, rgba(110,174,220,0.6), rgba(66,115,150,0.5), rgba(110,174,220,0.6))"
              : "linear-gradient(135deg, rgba(110,174,220,0.3), rgba(66,115,150,0.2), rgba(110,174,220,0.3))",
        }}
      />

      {/* Soft glow */}
      <div
        className={`absolute -inset-[4px] ${shapeClass[shape]} blur-2xl -z-20 animate-glass-glow-soft`}
        style={{
          background:
            variant === "primary"
              ? "radial-gradient(circle, rgba(110,174,220,0.4), rgba(66,115,150,0.3), transparent 70%)"
              : "radial-gradient(circle, rgba(110,174,220,0.25), transparent 70%)",
        }}
      />

      {/* Shimmer sweep */}
      <div className={`absolute inset-0 ${shapeClass[shape]} pointer-events-none`}>
        <div className="absolute w-[200%] h-full -left-full top-0 animate-glass-shimmer" />
      </div>

      {/* Content */}
      <span
        className="relative z-10 flex items-center gap-2 transition-transform duration-300"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        {children}
      </span>
    </>
  );

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: reset,
    className: `${base} ${variants[variant]} ${className}`,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
    },
  };

  if (href) {
    return (
      <a
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        role="button"
      >
        {Content}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
    >
      {Content}
    </button>
  );
}
