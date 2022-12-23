import { ContactMe, Navbar, Hero, About } from "@/components";

export default function Index() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll">
      <Navbar />
      <div className="pt-20" />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about/ */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* contact */}
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}
