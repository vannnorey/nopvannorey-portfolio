import { ReactNode } from "react";

type AnimateProps = {
  children: ReactNode;
  delay?: number;
  type?: "fade" | "slide-up" | "scale";
  className?: string;
};

export function Animate({
  children,
  delay = 0,
  type = "fade",
  className = "",
}: AnimateProps) {
  const animation =
    type === "slide-up"
      ? "animate-slide-up"
      : type === "scale"
      ? "animate-scale-in"
      : "animate-fade-in";

  return (
    <div
      className={`opacity-0 ${animation} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
