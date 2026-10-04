import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch projects");
        }

        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const normalProjects = projects.filter(
    (project) => !project.featured
  );

  const renderProject = (project, index, isFeatured = false) => (
    <article
      key={project._id}
      className="
        glass-card
        group
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-[0_20px_70px_rgba(0,0,0,0.18)]
      "
    >
      {/* Project Preview */}
      <div
        className={`
          relative
          overflow-hidden
          bg-gradient-to-br
          from-primary/10
          via-background-secondary
          to-accent/10
          ${isFeatured ? "min-h-[280px] sm:min-h-[380px]" : "min-h-[230px]"}
        `}
      >
        {/* Image */}
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />
        ) : (
          <>
            {/* Grid Background */}
            <div
              className="
                absolute
                inset-0
                opacity-40
                [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                [background-size:40px_40px]
              "
            />

            {/* Center Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-40
                w-40
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-primary/15
                blur-[70px]
                transition-transform
                duration-700
                group-hover:scale-150
              "
            />

            {/* Project Number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="
                  text-8xl
                  font-black
                  tracking-[-0.08em]
                  text-white/10
                  transition-all
                  duration-500
                  group-hover:text-primary/20
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </>
        )}

        {/* Image Overlay */}
        {project.image && (
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/15
              to-transparent
            "
          />
        )}

        {/* Featured Badge */}
        {isFeatured && (
          <span
            className="
              absolute
              right-5
              top-5
              rounded-full
              border
              border-primary/20
              bg-primary/10
              px-3
              py-1.5
              text-xs
              font-semibold
              text-primary
              backdrop-blur-md
            "
          >
            Featured Project
          </span>
        )}

        {/* Project Number */}
        {project.image && (
          <span
            className="
              absolute
              bottom-5
              left-5
              text-xs
              font-bold
              tracking-[0.2em]
              text-white/70
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-7 sm:p-8">
        {/* Category */}
        {project.category && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {project.category}
          </p>
        )}

        {/* Title */}
        <h3
          className={`
            font-bold
            tracking-[-0.02em]
            text-text
            ${isFeatured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}
          `}
        >
          {project.title}
        </h3>

        {/* Description */}
        {project.description && (
          <p className="mt-4 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
            {project.description}
          </p>
        )}

        {/* Tech Stack */}
        {project.technologies?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-border
                  bg-surface
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-text-secondary
                  transition-all
                  duration-300
                  hover:border-primary/50
                  hover:bg-primary/5
                  hover:text-primary
                "
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        {(project.demo || project.github) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {/* Live Demo */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary-hover
                  hover:shadow-[0_0_25px_var(--glow-primary)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary/40
                  focus:ring-offset-2
                  focus:ring-offset-background
                "
              >
                Live Demo
                <span>↗</span>
              </a>
            )}

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  bg-surface
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-text
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary
                  hover:bg-primary/5
                  hover:text-primary
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary/30
                  focus:ring-offset-2
                  focus:ring-offset-background
                "
              >
                GitHub
                <span>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );

  return (
    <>
      <Helmet>
        <title>Projects | Vipul Kumar</title>

        <meta
          name="description"
          content="Explore projects built by Vipul Kumar, including full-stack web applications, e-commerce systems, and machine learning projects."
        />

        <meta
          property="og:title"
          content="Projects | Vipul Kumar"
        />

        <meta
          property="og:description"
          content="Explore projects built by Vipul Kumar using React, JavaScript, Node.js, Express.js, MongoDB, and modern web technologies."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section
        id="projects"
        className="
          relative
          overflow-hidden
          border-t
          border-border
          bg-background
          py-24
          sm:py-32
        "
      >
        {/* Background Glows */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
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
            bottom-20
            h-96
            w-96
            rounded-full
            bg-accent/10
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-primary">
              02 / PROJECTS
            </p>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-6xl">
              Things I’ve built
              <span className="text-secondary"> with code.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              A selection of practical projects where I’ve worked across
              frontend interfaces, backend APIs, databases and complete web
              application workflows.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid gap-7 lg:grid-cols-2">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="glass-card animate-pulse overflow-hidden"
                >
                  <div className="h-[230px] bg-surface" />

                  <div className="space-y-4 p-7 sm:p-8">
                    <div className="h-3 w-24 rounded-full bg-surface" />
                    <div className="h-8 w-2/3 rounded-lg bg-surface" />
                    <div className="h-4 w-full rounded bg-surface" />
                    <div className="h-4 w-5/6 rounded bg-surface" />

                    <div className="flex gap-2 pt-2">
                      <div className="h-7 w-20 rounded-full bg-surface" />
                      <div className="h-7 w-24 rounded-full bg-surface" />
                      <div className="h-7 w-16 rounded-full bg-surface" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="glass-card border border-red-500/20 p-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                !
              </div>

              <h3 className="text-lg font-bold text-text">
                Unable to load projects
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                {error}
              </p>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && projects.length === 0 && (
            <div className="glass-card p-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
                ✦
              </div>

              <h3 className="text-xl font-bold text-text">
                No projects yet
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                Projects will appear here once they are added from the admin
                dashboard.
              </p>
            </div>
          )}

          {/* Projects */}
          {!loading && !error && projects.length > 0 && (
            <div className="space-y-10">
              {/* Featured Projects */}
              {featuredProjects.length > 0 && (
                <div className="space-y-7">
                  {featuredProjects.map((project, index) =>
                    renderProject(project, index, true)
                  )}
                </div>
              )}

              {/* Normal Projects */}
              {normalProjects.length > 0 && (
                <div className="grid gap-7 lg:grid-cols-2">
                  {normalProjects.map((project, index) =>
                    renderProject(project, index, false)
                  )}
                </div>
              )}
            </div>
          )}

          {/* Bottom */}
          {!loading && !error && projects.length > 0 && (
            <div className="mt-14 text-center">
              <p className="text-sm text-text-muted">
                More projects and experiments coming soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;