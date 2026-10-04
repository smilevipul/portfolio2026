import { NavLink } from "react-router-dom";

function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24 sm:py-32">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-96
          w-96
          rounded-full
          bg-primary/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-secondary/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 lg:p-16">
          <p className="text-sm font-bold tracking-[0.2em] text-primary">
            WHAT I’VE BUILT
          </p>

          <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-6xl">
                Turning ideas into
                <span className="text-secondary"> working applications.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                Explore some of the web applications and development projects
                I’ve built using modern frontend, backend and database
                technologies.
              </p>
            </div>

            <NavLink
              to="/projects"
              className="
                group
                inline-flex
                w-fit
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
              Explore Projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCTA;