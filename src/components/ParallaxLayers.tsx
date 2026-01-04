import { useEffect } from "react";

export function ParallaxLayers() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // normalize scroll range (same idea as [0, 1000])
      const progress = Math.min(scrollY / 1000, 1);

      // Far
      document.documentElement.style.setProperty(
        "--parallax-far-y",
        `${progress * 150}px`
      );
      document.documentElement.style.setProperty(
        "--parallax-far-scale",
        `${1 + progress * 0.05}`
      );

      // Mid
      document.documentElement.style.setProperty(
        "--parallax-mid-y",
        `${progress * 300}px`
      );
      document.documentElement.style.setProperty(
        "--parallax-mid-scale",
        `${1 + progress * 0.08}`
      );

      // Near
      document.documentElement.style.setProperty(
        "--parallax-near-y",
        `${progress * 500}px`
      );
      document.documentElement.style.setProperty(
        "--parallax-near-scale",
        `${1 + progress * 0.12}`
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ perspective: "600px" }}
    >
      {/* Far layer */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform:
            "translateY(var(--parallax-far-y)) scale(var(--parallax-far-scale))",
        }}
      >
        <div
          className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(66,115,150,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Mid layer */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform:
            "translateY(var(--parallax-mid-y)) scale(var(--parallax-mid-scale))",
        }}
      >
        <div
          className="absolute top-[40%] right-[20%] w-[350px] h-[350px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(110,174,220,0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Near layer */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform:
            "translateY(var(--parallax-near-y)) scale(var(--parallax-near-scale))",
        }}
      >
        <div
          className="absolute bottom-[20%] left-[25%] w-[300px] h-[300px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(110,174,220,0.2) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
