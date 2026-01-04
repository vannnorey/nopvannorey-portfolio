import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
};

export function GPUParticles() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.15,
      rotation: Math.random() * 360,
    }))
  );

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute will-change-transform animate-gpu-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size * 3,
            height: p.size * 3,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {/* Star particle */}
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            style={{
              filter: "drop-shadow(0 0 2px rgba(110,174,220,0.6))",
            }}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#6EAEDC"
              fillOpacity={p.opacity}
            />
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="none"
              stroke="#6EAEDC"
              strokeWidth="0.5"
              strokeOpacity={p.opacity * 0.8}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
