import { useEffect, useRef, useState } from "react";

/* Star SVG */
function Star({
  size = 8,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [trails, setTrails] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const idRef = useRef(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      idRef.current += 1;
      setTrails((prev) => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: idRef.current },
      ]);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      {/* Trails */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="fixed z-50 pointer-events-none animate-star-trail"
          style={{
            left: t.x,
            top: t.y,
          }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <Star
              size={8}
              className="text-[#6EAEDC]"
              style={{
                filter: "drop-shadow(0 0 4px rgba(110,174,220,0.8))",
              }}
            />
          </div>
        </div>
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed z-50 pointer-events-none transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 animate-star-rotate">
          <Star
            size={20}
            className="text-[#6EAEDC]"
            style={{
              filter:
                "drop-shadow(0 0 8px rgba(110,174,220,1)) drop-shadow(0 0 16px rgba(110,174,220,0.6))",
            }}
          />
        </div>
      </div>

      {/* Glow */}
      <div
        ref={glowRef}
        className={`fixed z-40 pointer-events-none transition-opacity duration-200 ${
          visible ? "opacity-40" : "opacity-0"
        }`}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 animate-star-pulse">
          <div
            className="w-40 h-40 blur-[40px]"
            style={{
              background:
                "radial-gradient(circle, rgba(110,174,220,0.4) 0%, rgba(66,115,150,0.2) 50%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
