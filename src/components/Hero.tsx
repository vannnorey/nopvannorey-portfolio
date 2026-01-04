
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassButton } from "./GlassButton";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-[#6EAEDC]/20 rounded-full px-5 py-2.5">
              <Sparkles size={16} className="text-[#6EAEDC]" />
              <span className="text-white/90 text-sm tracking-wide">
                Available for work
              </span>
              <span className="w-2 h-2 bg-[#6EAEDC] rounded-full" />
            </div>

            <div>
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                <span className="inline-block font-black">
                  UX/UI
                </span>
                <br />
                <span className="font-black bg-gradient-to-r from-[#6EAEDC] via-white to-[#427396]
                            bg-clip-text text-transparent">
                  Designer 
                </span>
                <br />
              </h1>
            </div>

            <p className="text-[#898989] text-lg sm:text-xl max-w-xl">
              Crafting user experiences and beautiful interface designs through user-centered design principles.
            </p>

            <div className="flex flex-wrap gap-4">
              <GlassButton href="#projects" variant="primary">
                View Projects
                <ArrowRight size={18} />
              </GlassButton>
              <GlassButton href="#contact" variant="ghost">
                Get in Touch
              </GlassButton>
            </div>
          </div>

          {/* Right: Glass Panel */}
          <div>
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-[#6EAEDC]/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
              {/* Glass reflection */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6EAEDC]/15 via-transparent to-[#427396]/10 opacity-60 pointer-events-none" />

              {/* Glowing edge */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6EAEDC]/40 via-[#427396]/40 to-[#6EAEDC]/40 rounded-3xl blur-md -z-10 opacity-60" />

              {/* Content */}
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                    <img
                      src="/image/bg_1.webp"
                      alt="thumbnail"
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Sparkles className="w-5 h-5 text-white/40 drop-shadow-md" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-white">
                      Nop Vannorey
                    </div>
                    <div className="text-[16px]" style={{ color: "#6EAEDC" }}>
                      UI / UX • Designer
                    </div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { w: 85, label: "Figma" },
                    { w: 65, label: "XD" },
                    { w: 50, label: "Photoshop" },
                  ].map((p, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-center text-xs text-white">
                        <span>{p.label}</span>
                        <span>{p.w}%</span>
                      </div>

                      {/* Progress track */}
                      <div className="h-3 bg-white/6 rounded-full border border-white/10 backdrop-blur-sm overflow-hidden">
                        {/* Progress fill */}
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${p.w}%`,
                            background:
                              "linear-gradient(90deg, rgba(0, 149, 255, 0.45), rgba(44, 137, 202, 0.35))",
                            boxShadow:
                              "0 6px 18px rgba(66,115,150,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tool icons */}
                <div className="grid grid-cols-3 gap-5 pt-4">
                  {[
                    { src: "/image/figma.webp" },
                    { src: "/image/xd.webp" },
                    { src: "/image/photoshop.webp" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="relative aspect-square bg-white/6 flex items-center justify-center p-3"
                    >
                      {/* Shadow */}
                      <div
                        className="absolute pointer-events-none inset-0 rounded-lg"
                        style={{
                          boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                        }}
                      />

                      {/* Icon */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div
                          className="flex items-center justify-center rounded-full p-2 backdrop-blur-sm"
                          style={{
                            width: "72px",
                            height: "72px",
                          }}
                        >
                          <img
                            src={item.src}
                            alt="icon"
                            className="w-11 h-11 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
