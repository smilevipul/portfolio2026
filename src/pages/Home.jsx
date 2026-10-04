import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/About";
import Skills from "../components/sections/Skills";
import ProjectsCTA from "../components/sections/ProjectsCTA";

import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>

      <Helmet>
  <title>Vipul Kumar | Full Stack Developer</title>

  <meta
    name="description"
    content="Portfolio of Vipul Kumar, a Computer Science graduate and Full Stack Developer building modern web applications with React, JavaScript, Node.js, Express.js, and MongoDB."
  />

  <meta
    property="og:title"
    content="Vipul Kumar | Full Stack Developer"
  />

  <meta
    property="og:description"
    content="Explore the portfolio of Vipul Kumar — Full Stack Developer focused on modern web applications."
  />

  <meta property="og:type" content="website" />
</Helmet>

      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsCTA />

    </>
  );
}

export default Home;