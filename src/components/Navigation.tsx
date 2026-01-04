import { useEffect, useState, type JSX } from "react";
import { Menu, X } from "lucide-react";
import "../navigation.css";

type NavItem = {
  label: string;
  href: string;
};

export function Navigation(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen
      ? "hidden"
      : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string): void => {
    setMobileMenuOpen(false);
    const el = document.querySelector<HTMLElement>(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="nav-root">
        <div className={`nav-pill ${scrolled ? "nav-scrolled" : ""}`}>
          {/* Glass layers */}
          <div className="glass-layer" />
          <div className="glass-reflection" />
          <div className="inner-highlight" />
          <div className="outer-glow" />
          <div className="outer-glow-2" />

          <div className="nav-content">
            <span className="nav-logo">Portfolio</span>

            <div className="nav-desktop">
              <div className="nav-separator" />
              <div className="nav-links">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <button
              className="nav-mobile-btn"
              onClick={() =>
                setMobileMenuOpen((v) => !v)
              }
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />

          <aside className="mobile-drawer">
            <div className="mobile-glass" />
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <p className="mobile-footer">Portfolio 2026</p>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
