function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-secondary/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-primary">
            01 / ABOUT ME
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-6xl">
            Computer Science graduate focused on
            <span className="text-secondary"> full-stack development.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Introduction */}
          <div>
            <p className="max-w-3xl text-xl leading-9 text-text-secondary sm:text-2xl sm:leading-10">
              I’m Vipul Kumar, a Computer Science and Engineering graduate
              focused on building modern, responsive web applications across
              frontend, backend, and database technologies.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-text-muted">
              I completed my B.Tech in Computer Science and Engineering in
              2025. My development work includes building responsive
              interfaces with React, developing backend applications with
              Node.js and Express.js, and integrating MongoDB for data
              management.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-text-muted">
              I prefer learning through practical implementation and building
              complete applications rather than focusing only on theoretical
              concepts.
            </p>

            {/* Technologies */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-text">
                Core Technologies
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-surface
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-text-secondary
                      transition-all
                      duration-300
                      hover:border-primary
                      hover:text-primary
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            {/* Education */}
            <div
              className="
                rounded-2xl
                border
                border-border
                bg-surface/70
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-primary
              "
            >
              <p className="text-sm text-text-muted">
                Education
              </p>

              <p className="mt-2 text-lg font-bold text-text">
                B.Tech in Computer Science & Engineering
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Completed in 2025
              </p>
            </div>

            {/* Primary Focus */}
            <div
              className="
                rounded-2xl
                border
                border-border
                bg-surface/70
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-secondary
              "
            >
              <p className="text-sm text-text-muted">
                Primary Focus
              </p>

              <p className="mt-2 text-lg font-bold text-text">
                Full Stack Web Development
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Frontend • Backend • Database
              </p>
            </div>

            {/* What I Build */}
            <div
              className="
                rounded-2xl
                border
                border-border
                bg-surface/70
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-accent
              "
            >
              <p className="text-sm text-text-muted">
                What I Build
              </p>

              <p className="mt-2 text-lg font-bold text-text">
                Full-Stack Web Applications
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Responsive interfaces, APIs, databases & complete workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;