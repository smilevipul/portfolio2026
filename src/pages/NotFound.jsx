import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Vipul Kumar</title>

        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Helmet>

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          bg-background
          px-6
        "
      >
        {/* Background Glows */}
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-20
            h-80
            w-80
            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-10
            h-80
            w-80
            rounded-full
            bg-accent/10
            blur-[120px]
          "
        />

        {/* Content */}
        <div className="relative text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-primary">
            ERROR 404
          </p>

          <h1
            className="
              mt-4
              text-8xl
              font-black
              tracking-[-0.08em]
              text-text
              sm:text-[10rem]
            "
          >
            404
          </h1>

          <h2 className="mt-2 text-2xl font-bold text-text sm:text-3xl">
            Page not found.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-text-muted sm:text-base">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <NavLink
            to="/"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-primary-hover
              hover:shadow-[0_0_28px_var(--glow-primary)]
            "
          >
            Back to Home
            <span>↗</span>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default NotFound;