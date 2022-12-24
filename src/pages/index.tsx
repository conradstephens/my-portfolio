import { ContactMe, Navbar, Hero, About } from "@/components";

export default function Index() {
  return (
    <div className="z-0">
      <Navbar />
      {/* hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* about/ */}
      <section id="about">
        <About />
      </section>

      {/* contact */}
      {/* <section id="contact">
        <ContactMe />
      </section> */}
    </div>
  );
}
