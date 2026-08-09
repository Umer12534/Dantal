import { useState, useEffect } from "react";

// ── Logo SVG extracted as a tiny sub-component for reuse in Footer too
export function LogoSVG() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 2C10 2 6 5.5 6 10c0 2 .6 3.8 1.5 5.2C9 17.5 9.5 20 9.5 22.5c0 1.5.7 2.5 2 2.5h5c1.3 0 2-1 2-2.5 0-2.5.5-5 2-7.3C21.4 13.8 22 12 22 10c0-4.5-4-8-8-8z"
        fill="#1AAFA0"
      />
    </svg>
  );
}

// ── Smooth-scroll helper (replaces the vanilla querySelectorAll listener)
function scrollTo(id) {
  const target = document.querySelector(id);
  if (!target) return;
  const navH = document.getElementById("nav")?.offsetHeight ?? 72;
  window.scrollTo({ top: target.offsetTop - navH, behavior: "smooth" });
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Replaces: window.addEventListener("scroll", …) in script.js
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // ── Replaces: closeMobile() global function
  function handleNavClick(href) {
    setMenuOpen(false);
    scrollTo(href);
  }

  return (
    <>
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav__inner">
          {/* Logo */}
          <a
            href="#home"
            className="nav__logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <LogoSVG />
            <span>PureSmile</span>
          </a>

          {/* Desktop links */}
          <nav className="nav__links">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav__cta"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
            >
              Book Appointment
            </a>
          </nav>

          {/* Burger button — replaces: burger.addEventListener("click", …) */}
          <button
            className="nav__burger"
            id="burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ─── MOBILE MENU ──────────────────────────────────────── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(href);
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-menu__cta"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
        >
          Book Appointment
        </a>
      </div>
    </>
  );
}
