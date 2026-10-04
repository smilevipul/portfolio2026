import { NavLink } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
  
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-64
          w-96
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <NavLink
              to="/"
              aria-label="Vipul Kumar - Home"
              className="group inline-block text-3xl font-black tracking-[-0.06em] text-text"
            >
              V
              <span className="text-primary transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_var(--glow-primary)]">
                .
              </span>
            </NavLink>

            <p className="mt-5 max-w-sm text-sm leading-7 text-text-muted">
              Full Stack Developer focused on building modern, responsive,
              and user-friendly web applications.
            </p>

            <p className="mt-5 text-sm font-medium text-text-secondary">
              Let&apos;s build something meaningful.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-text">
              Navigation
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-text-muted hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-text">
              Connect
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="mailto:vipul.kumar2902@gmail.com"
                className="text-sm text-text-muted transition-colors duration-300 hover:text-primary"
              >
                Email ↗
              </a>

              <a
                href="https://github.com/smilevipul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors duration-300 hover:text-primary"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/vipul-kumar-634821222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors duration-300 hover:text-primary"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Vipul Kumar. All rights reserved.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xs text-text-muted">
              Designed & built with React.
            </p>

            {/* Admin Login */}
            <a
              href="https://portfolio-admin-rou6.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted transition-colors duration-300 hover:text-primary"
            >
              Admin Login ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;