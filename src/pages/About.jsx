import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About | Vipul Kumar</title>

        <meta
          name="description"
          content="Learn more about Vipul Kumar, a Computer Science graduate and Full Stack Developer focused on React, JavaScript, Node.js, Express.js, and MongoDB."
        />

        <meta
          property="og:title"
          content="About | Vipul Kumar"
        />

        <meta
          property="og:description"
          content="Learn more about Vipul Kumar and his background in Computer Science and full-stack web development."
        />

        <meta property="og:type" content="profile" />
      </Helmet>

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
          {/* Section Heading */}
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-primary">
              01 / ABOUT ME
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-6xl">
              Building modern web applications
              <span className="text-secondary">
                {" "}
                from frontend to backend.
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr]">
            {/* About Text */}
            <div>
              <p className="max-w-3xl text-xl leading-9 text-text-secondary sm:text-2xl sm:leading-10">
                I’m Vipul Kumar, a Computer Science graduate and Full Stack
                Developer focused on building modern, responsive and
                user-friendly web applications.
              </p>

              <p className="mt-7 max-w-3xl text-base leading-8 text-text-muted">
                I completed my B.Tech in Computer Science and Engineering in
                2025. My development experience includes building applications
                with JavaScript, React, Node.js, Express and MongoDB, covering
                everything from responsive frontend interfaces to backend APIs
                and database integration.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-text-muted">
                My primary focus is frontend and full-stack development, with
                an emphasis on clean UI, reliable backend systems and
                maintainable code. I continue to strengthen my skills by
                building practical projects and turning ideas into complete,
                functional web applications.
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
                        hover:-translate-y-0.5
                        hover:border-primary
                        hover:text-primary
                        hover:shadow-[0_0_18px_var(--glow-primary)]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Details */}
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
                  hover:-translate-y-1
                  hover:border-primary
                  hover:shadow-[0_12px_30px_var(--shadow-soft)]
                "
              >
                <p className="text-sm text-text-muted">Education</p>

                <p className="mt-2 text-lg font-bold text-text">
                  B.Tech — Computer Science & Engineering
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
                  hover:-translate-y-1
                  hover:border-secondary
                  hover:shadow-[0_12px_30px_var(--glow-secondary)]
                "
              >
                <p className="text-sm text-text-muted">Primary Focus</p>

                <p className="mt-2 text-lg font-bold text-text">
                  Full Stack Web Development
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Frontend • Backend • Database
                </p>
              </div>

              {/* Development Approach */}
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
                  hover:-translate-y-1
                  hover:border-accent
                  hover:shadow-[0_12px_30px_var(--glow-accent)]
                "
              >
                <p className="text-sm text-text-muted">
                  Development Approach
                </p>

                <p className="mt-2 text-lg font-bold text-text">
                  Practical & Project-Based
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Clean code • Responsive UI • Maintainable architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;