const socialLinks = [
  { name: "Telegram", url: "https://t.me/vann_norey" },
  { name: "Dribbble", url: "https://dribbble.com/vann_norey/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22vann_norey%22&utm_content=%22About%20vann_norey%22&utm_medium=Social_Share" },
  { name: "Pinterest", url: "https://pin.it/60BkWMm6v" },
  { name: "Github", url: "https://github.com/vannnorey" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#6EAEDC]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div
            className="space-y-4"
          >
            <div className="text-white tracking-tight text-xl">
              <span className="bg-gradient-to-r from-[#6EAEDC] via-white to-[#427396] bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-4"
          >
            <h4 className="text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Projects", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/50 hover:text-[#6EAEDC] transition-all text-sm w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div
            className="space-y-4"
          >
            <h4 className="text-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.slice(0, 4).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-white/50 hover:text-white hover:border-[#6EAEDC]/40 hover:bg-white/10 transition-all text-sm"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-[#6EAEDC]/10"
        >
          <div className="gap-4 grid justify-center md:grid-cols-2  text-sm text-white/40">
            <div className="flex gap-2">
              <span>© {currentYear} Portfolio. All rights reserved.</span>
            </div>

            <div className="flex justify-center items-center gap-1">
              <span>Made with</span>
              <div>
                {/* Replace Heart icon with SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#6EAEDC"
                  stroke="#6EAEDC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#6EAEDC]"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <span>and passion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}