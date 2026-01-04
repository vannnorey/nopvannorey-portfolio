import { Code, Palette, PenTool } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description:
        "Designing user-centered interfaces for mobile and web applications",
    },
    {
      icon: <PenTool size={24} />,
      title: "Graphic Design",
      description:
        "Creating posters, icons, and visual assets for branding and communication",
    },
    {
      icon: <Code size={24} />,
      title: "Front-End Design",
      description:
        "Building responsive, performant web interfaces from design systems",
    },
  ];

  const stats = [
    { value: "2+", label: "Projects Completed" },
    { value: "2+", label: "Design Practice" },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Top neon line */}
      <div className="absolute -top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6EAEDC] to-transparent shadow-[0_0_20px_rgba(110,174,220,0.5)] animate-line-in" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#6EAEDC] via-[#427396] to-[#6EAEDC] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-[#898989] text-lg max-w-2xl mx-auto">
            Passionate about designing intuitive digital experiences with a
            focus on clarity and usability
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Bio */}
          <div className="animate-slide-left">
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-[#6EAEDC]/20 rounded-3xl p-8 shadow-2xl">
              {/* Glass layers */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-[#6EAEDC]/10 opacity-60 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(110,174,220,0.15)] pointer-events-none" />

              {/* Glow */}
              <div className="absolute -inset-[1px] rounded-3xl blur-md -z-10 animate-glass-glow" />

              <div className="relative space-y-6">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6EAEDC] to-[#427396] shadow-lg shadow-[#6EAEDC]/40 overflow-hidden hover:scale-110 hover:rotate-3 transition-transform duration-300">
                  <img
                    src="/image/bg_1.webp"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bio text */}
                <div className="space-y-4 animate-fade">
                  <h3 className="text-white text-2xl">N. Vannorey</h3>
                  <p className="text-white/50 leading-relaxed">
                    I’m Nop Vannnorey — a newly graduated UX/UI Designer who loves
                    turning ideas into meaningful digital experiences. With a
                    Computer Science background, I blend creativity with
                    usability.
                  </p>
                  <p className="text-white/50 leading-relaxed">
                    Whether it’s a mobile app or a web system, I design with
                    purpose, clarity, and users at the center.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-xl bg-white/5 border border-[#6EAEDC]/20 rounded-xl p-4 text-center hover:-translate-y-1 hover:scale-105 transition-transform"
                    >
                      <div className="text-[#6EAEDC] text-2xl mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-slide-right">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="relative backdrop-blur-2xl bg-white/[0.06] border border-white/10 rounded-2xl p-6 shadow-xl hover:translate-x-3 hover:scale-[1.02] transition-transform"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-[#6EAEDC]/5 opacity-60 pointer-events-none" />

                <div className="relative flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6EAEDC]/20 to-[#427396]/20 border border-[#6EAEDC]/30 flex items-center justify-center text-[#6EAEDC] hover:rotate-[360deg] hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white text-lg">{skill.title}</h4>
                    <p className="text-white/50">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
