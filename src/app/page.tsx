import {
  Navbar,
  Hero,
  About,
  Projects,
  ContactMe,
  DemoVideoModal,
} from "@/components";
import type {
  Hero as HeroTypes,
  Social,
  About as AboutTypes,
  Project,
  Tech,
  CommonTech,
} from "@/types";
import { sanityClient } from "sanity";
import { groq } from "next-sanity";

// Next.js will attempt to re-generate the page:
// - When a request comes in
// - At most once every 10 seconds
export const revalidate = 10; // revalidate this page every 10 seconds
async function getData() {
  const hero: HeroTypes = await sanityClient.fetch(groq`*[_type == "hero"][0]`);
  const socials: Social[] = await sanityClient.fetch(
    groq`*[_type == "social"]`
  );
  const about: AboutTypes = await sanityClient.fetch(
    groq`*[_type == "about"][0]`
  );
  const commonTech: CommonTech[] = await sanityClient.fetch(
    groq`*[_type == "commonTech"]`
  );
  const projects: Project[] = await sanityClient.fetch(
    groq`*[_type == "project"]`
  );
  const tech: Tech[] = await sanityClient.fetch(groq`*[_type == "tech"]`);
  return { hero, socials, about, commonTech, projects, tech };
}

export default async function Page() {
  const { hero, socials, about, commonTech, projects, tech } = await getData();

  return (
    <div className="relative z-0 h-screen overflow-scroll scroll-smooth scrollbar-thin scrollbar-thumb-primary">
      <Navbar />
      {/* <div className="block sm:hidden" /> */}
      {/* hero */}
      <section id="hero">
        <Hero hero={hero} socials={socials} />
      </section>
      {/* <div className="space-y-32"> */}
      {/* about */}
      <section id="about">
        <About aboutData={about} commonTech={commonTech} />
      </section>

      {/* projects */}
      <section id="projects">
        <Projects projects={projects} tech={tech} />
      </section>

      {/* contact */}
      <section id="contact">
        <ContactMe />
      </section>
      {/* </div> */}
      {/* Modal */}
      <DemoVideoModal />
    </div>
  );
}
