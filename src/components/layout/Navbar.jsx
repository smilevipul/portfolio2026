import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="glass-nav fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          aria-label="Vipul Kumar - Home"
          className="group text-2xl font-black tracking-[-0.05em] text-text"
        >
          V
          <span className="text-primary transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_var(--glow-primary)]">
            .
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_18px_var(--glow-primary)]"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Let's Talk */}
          <NavLink
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_0_25px_var(--glow-primary)]"
          >
            Let's Talk ↗
          </NavLink>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            className="rounded-full border border-border bg-surface px-3 py-2 text-sm transition-all duration-300 hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="rounded-full border border-border bg-surface px-3 py-2 text-lg text-text transition-all duration-300 hover:border-primary hover:text-primary"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${
                  isActive ? "mobile-nav-link-active" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mt-5 rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_0_25px_var(--glow-primary)]"
          >
            Let's Talk ↗
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;