import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume | Vipul Kumar</title>

        <meta
          name="description"
          content="View and download the resume of Vipul Kumar, a Computer Science graduate and Full Stack Developer skilled in React.js, Node.js, Express.js, and MongoDB."
        />

        <meta
          property="og:title"
          content="Resume | Vipul Kumar"
        />

        <meta
          property="og:description"
          content="View Vipul Kumar's education, technical skills, projects, and achievements."
        />

        <meta property="og:type" content="profile" />
      </Helmet>

      <main className="min-h-screen bg-background px-4 pb-20 pt-24 text-text sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <section className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              05 / RESUME
            </p>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Vipul Kumar
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                  Computer Science graduate and full-stack developer focused on
                  building modern web applications using React.js, Node.js,
                  Express.js and MongoDB.
                </p>
              </div>

              <a
                href="/Vipul_Kumar_Resume.pdf"
                download
                className="inline-flex w-fit items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Download Resume
              </a>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="mb-12">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="mb-5 text-2xl font-bold">
                Professional Summary
              </h2>

              <p className="max-w-4xl leading-8 text-text-secondary">
                Computer Science graduate from IIIT Bhagalpur with experience
                developing full-stack web applications using React.js, Node.js,
                Express.js, and MongoDB. Built REST APIs, analytics dashboards,
                and machine learning systems through academic and practical
                projects. Strong foundation in backend application development,
                database integration, and modern web technologies.
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Education</h2>

            <div className="space-y-5">
              <div className="glass-card p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Indian Institute of Information Technology Bhagalpur
                    </h3>

                    <p className="mt-1 text-text-secondary">
                      B.Tech in Computer Science and Engineering
                    </p>
                  </div>

                  <span className="text-sm text-primary">
                    2021 – 2025
                  </span>
                </div>

                <p className="mt-4 text-sm text-text-secondary">
                  CGPA: <span className="text-text">7.04</span>
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Jagdish Mandal Inter College
                    </h3>

                    <p className="mt-1 text-text-secondary">
                      Bihar School Examination Board — Class 12
                    </p>
                  </div>

                  <span className="text-sm text-primary">
                    2017 – 2019
                  </span>
                </div>

                <p className="mt-4 text-sm text-text-secondary">
                  Percentage: <span className="text-text">83.2%</span>
                </p>
              </div>

              <div className="glass-card p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Bhagi Rath High School Nirmali
                    </h3>

                    <p className="mt-1 text-text-secondary">
                      Bihar School Examination Board — Class 10
                    </p>
                  </div>

                  <span className="text-sm text-primary">
                    2016 – 2017
                  </span>
                </div>

                <p className="mt-4 text-sm text-text-secondary">
                  Percentage: <span className="text-text">72.6%</span>
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Programming Languages",
                  skills: ["C++", "JavaScript"],
                },
                {
                  title: "Frontend",
                  skills: ["React.js", "HTML5", "CSS3"],
                },
                {
                  title: "Backend",
                  skills: ["Node.js", "Express.js", "REST APIs"],
                },
                {
                  title: "Database",
                  skills: ["MongoDB"],
                },
                {
                  title: "Developer Tools",
                  skills: ["Git", "GitHub", "Postman", "VS Code"],
                },
                {
                  title: "Core Concepts",
                  skills: [
                    "Data Structures",
                    "Algorithms",
                    "Operating Systems",
                    "OOP",
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="glass-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Projects</h2>

            <div className="space-y-6">

              {/* Malaria */}
              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Malaria Detection Using Deep Learning
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      Medical Imaging Analysis
                    </p>
                  </div>

                  <span className="text-sm text-text-secondary">
                    Jan 2025
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-text-secondary">
                  <li>
                    • Developed a VGG19 deep learning model achieving 92%
                    classification accuracy for malaria detection from blood
                    smear images.
                  </li>

                  <li>
                    • Processed and analyzed 20,000+ medical images using Python
                    data pipelines and augmentation techniques.
                  </li>

                  <li>
                    • Designed a Flask REST API integrated with a React.js
                    interface for real-time prediction results.
                  </li>

                  <li>
                    • Performed model evaluation and image preprocessing using
                    TensorFlow, Keras, NumPy, and OpenCV.
                  </li>
                </ul>
              </div>

              {/* Craftvilla */}
              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Craftvilla — E-commerce Analytics Dashboard
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      Full Stack Web Project
                    </p>
                  </div>

                  <span className="text-sm text-text-secondary">
                    Mar 2024
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-text-secondary">
                  <li>
                    • Developed a full-stack analytics dashboard with JWT
                    authentication and role-based authorization.
                  </li>

                  <li>
                    • Analyzed 1000+ sales records using MongoDB aggregation
                    pipelines to generate business insights.
                  </li>

                  <li>
                    • Improved frontend responsiveness by 40% through optimized
                    API requests and efficient state management.
                  </li>

                  <li>
                    • Implemented backend services in Node.js and Express.js for
                    product management and analytics processing.
                  </li>
                </ul>
              </div>

              {/* ExploreX */}
              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">
                      ExploreX
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      Responsive Travel Website
                    </p>
                  </div>

                  <span className="text-sm text-text-secondary">
                    Sept 2023
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-text-secondary">
                  <li>
                    • Developed a responsive travel website with a modern and
                    user-friendly interface using HTML5, CSS3, and JavaScript.
                  </li>

                  <li>
                    • Built interactive features including responsive
                    navigation, smooth scrolling, image sliders, and
                    scroll-based animations.
                  </li>

                  <li>
                    • Improved page performance through optimized assets,
                    organized code structure, and efficient frontend development
                    practices.
                  </li>

                  <li>
                    • Managed version control using Git and GitHub and deployed
                    the project on Render.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Achievements</h2>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="glass-card p-6">
                <p className="text-sm text-primary">2022</p>

                <h3 className="mt-2 text-lg font-semibold">
                  Smart India Hackathon Finalist
                </h3>

                <p className="mt-1 text-sm text-text-secondary">
                  Team Leader
                </p>

                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  Led a team of 4 members to develop a placement tracking portal
                  within a 36-hour hackathon and designed dashboards to monitor
                  placement data for 100+ student records.
                </p>
              </div>

              <div className="glass-card p-6">
                <p className="text-sm text-primary">2022</p>

                <h3 className="mt-2 text-lg font-semibold">
                  Web Development Competition — 7th Place
                </h3>

                <p className="mt-1 text-sm text-text-secondary">
                  Techno Cultural Fest
                </p>

                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  Presented a Tour Navigation application built with Node.js,
                  Express.js, and dynamic UI components.
                </p>
              </div>

            </div>
          </section>

          {/* Contact CTA */}
          <section className="glass-card p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold">
              Interested in working together?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              I’m open to opportunities where I can contribute to building
              modern, scalable web applications.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Let’s Talk
              </Link>

              <Link
                to="/projects"
                className="rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                View Projects
              </Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default Resume;