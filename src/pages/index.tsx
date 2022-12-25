import { ContactMe, Navbar, Hero, About, Projects } from "@/components";

export default function Index() {
  return (
    <div className="z-0">
      <Navbar />
      {/* hero */}
      <section id="hero">
        <Hero />
      </section>

      <div className="space-y-32">
        {/* about/ */}
        <section id="about">
          <About />
        </section>

        {/* projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* contact */}
        <section id="contact">
          <ContactMe />
        </section>
      </div>
    </div>
  );
}
