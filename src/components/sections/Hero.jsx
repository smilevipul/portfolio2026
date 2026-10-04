import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="mt-8 relative isolate min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.08]
          [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Primary Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          -z-10
          h-96
          w-96
          rounded-full
          bg-secondary/15
          blur-[130px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          right-0
          -z-10
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-primary/10
          blur-[140px]
        "
      />

      {/* Accent Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[15%]
          -z-10
          h-40
          w-40
          rounded-full
          bg-accent/10
          blur-[100px]
        "
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-5xl">
          {/* Availability */}
          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              bg-surface/70
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_15px_var(--glow-primary)]" />
            </span>

            <span className="text-xs font-semibold tracking-[0.18em] text-text-secondary sm:text-sm">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Main Heading */}
        <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-text sm:text-7xl lg:text-8xl xl:text-9xl">
  I BUILD
  <br />

  <span className="text-primary">MODERN WEB</span>

  <br />

  <span className="text-text">EXPERIENCES.</span>
</h1>

          {/* Role */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <p className="text-sm font-bold tracking-[0.2em] text-secondary sm:text-base">
              FULL STACK DEVELOPER
            </p>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
  I’m Vipul Kumar, a Computer Science graduate and full stack developer
  focused on building modern, responsive web applications using React,
  JavaScript, Node.js, Express and MongoDB.
</p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <NavLink
              to="/projects"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-primary
                px-7
                py-3.5
                font-bold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-primary-hover
                hover:shadow-[0_0_35px_var(--glow-primary)]
              "
            >
              View My Work

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </NavLink>

            <NavLink
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface/60
                px-7
                py-3.5
                font-semibold
                text-text
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-secondary
                hover:text-secondary
                hover:shadow-[0_0_30px_var(--glow-secondary)]
              "
            >
              Let’s Talk
            </NavLink>
          </div>

        {/* Social Links */}
<div className="mt-10 flex items-center gap-6">
  <a
    href="https://github.com/smilevipul"
    target="_blank"
    rel="noreferrer"
    className="text-sm font-medium text-text-muted transition-colors duration-300 hover:text-primary"
  >
    GitHub ↗
  </a>

  <span className="h-1 w-1 rounded-full bg-border-hover" />

  <a
    href="#"
    className="text-sm font-medium text-text-muted transition-colors duration-300 hover:text-secondary"
  >
    LinkedIn ↗
  </a>
</div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

export default Hero;
