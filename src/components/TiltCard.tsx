import { ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative transition-transform duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}
