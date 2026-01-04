import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TiltCard } from "./TiltCard";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

export function ProjectCard({
  title,
  category,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative">
      <TiltCard>
        {/* Premium Glass Card */}
        <div
          className="relative bg-white/[0.08] border-2 border-white/20 rounded-3xl overflow-hidden
                     transition-transform duration-300 group-hover:-translate-y-3"
          style={{
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(110, 174, 220, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Glass layers */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.02) 60%, rgba(0,0,0,0.1) 100%)",
            }}
          />
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-60"
            style={{
              background:
                "linear-gradient(135deg, rgba(110,174,220,0.15) 0%, transparent 50%, rgba(66,115,150,0.1) 100%)",
            }}
          />

          {/* Static glow layers (no animation) */}
          <div
            className="absolute -inset-[2px] rounded-3xl -z-10 opacity-70"
            style={{
              background:
                "linear-gradient(135deg, rgba(110,174,220,0.4), rgba(66,115,150,0.3), rgba(110,174,220,0.4))",
              filter: "blur(12px)",
            }}
          />
          <div
            className="absolute -inset-[4px] rounded-3xl -z-20 opacity-50"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(110,174,220,0.3), rgba(66,115,150,0.2), transparent 70%)",
              filter: "blur(16px)",
            }}
          />

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#427396]/10 to-[#6EAEDC]/10">
            {image ? (
              <div className="transition-transform duration-500 group-hover:scale-110">
                <ImageWithFallback
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6EAEDC]/20 to-[#427396]/20 border border-[#6EAEDC]/30" />
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/95 via-[#0a0e27]/60 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Arrow */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} in new tab`}
              className="absolute top-4 right-4 z-20"
            >
              <div
                className="w-12 h-12 backdrop-blur-3xl bg-white/10 border border-[#6EAEDC]/20
                           rounded-full flex items-center justify-center
                           opacity-0 translate-y-3
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-300"
              >
                <ArrowUpRight size={26} className="text-[#6EAEDC]" />
              </div>
            </a>
          </div>

          {/* Content */}
          <div className="relative p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-[#6EAEDC] text-sm tracking-wide">
                {category}
              </div>
              <h3 className="text-white text-xl">{title}</h3>
              <p className="text-white/50 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 backdrop-blur-3xl bg-white/8 border border-[#6EAEDC]/25
                             rounded-full text-white/70 text-xs
                             hover:text-white hover:border-[#6EAEDC]/50
                             transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
