const skillGroups = [
  {
    title: "Frontend",
    description:
      "Building responsive and interactive interfaces with a focus on clean design and user experience.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description:
      "Developing server-side applications, REST APIs, authentication and complete application workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Database",
    description:
      "Managing application data and connecting backend services with reliable database systems.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Using modern development tools for version control, API testing and efficient project development.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
            02 / SKILLS
          </p>

          <h2 className="text-4xl font-black tracking-[-0.04em] text-text sm:text-6xl">
            Technologies I use to
            <span className="text-secondary"> build.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            A practical set of technologies I use across frontend, backend,
            databases and full-stack web application development.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="
                glass-card
                group
                p-7
                sm:p-8
              "
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold tracking-[0.18em] text-primary">
                  0{index + 1}
                </span>

                <span
                  className="
                    text-text-muted
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-primary
                  "
                >
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-bold tracking-[-0.02em] text-text">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-md text-sm leading-7 text-text-muted">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-border
                      bg-background/70
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-text-secondary
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-primary
                      hover:text-primary
                      hover:shadow-[0_0_16px_var(--glow-primary)]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;