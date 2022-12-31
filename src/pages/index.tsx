import { ContactMe, Navbar, Hero, About, Projects } from "@/components";
import type { GetStaticProps } from "next";
import type {
  Hero as HeroTypes,
  Social,
  About as AboutTypes,
  Project,
  Tech,
} from "@/types";
import { sanityClient } from "sanity";
import { groq } from "next-sanity";
import { CommonTech } from "src/types/sanity";

type Props = {
  hero: HeroTypes;
  socials: Social[];
  about: AboutTypes;
  commonTech: CommonTech[];
  projects: Project[];
  tech: Tech[];
};

export default function Index(props: Props) {
  const { hero, socials, about, commonTech, projects, tech } = props;
  return (
    <div className="relative z-0 h-screen overflow-scroll scroll-smooth scrollbar-thin scrollbar-thumb-primary">
      <Navbar />
      {/* hero */}
      <section id="hero">
        <Hero hero={hero} socials={socials} />
      </section>

      <div className="space-y-32">
        {/* about/ */}
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
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const hero: HeroTypes = await sanityClient.fetch(groq`
    *[_type == "hero"][0]
  `);
  const socials: Social[] = await sanityClient.fetch(groq`
    *[_type == "social"]
  `);
  const about: AboutTypes = await sanityClient.fetch(groq`
    *[_type == "about"][0]
  `);
  const commonTech: CommonTech[] = await sanityClient.fetch(groq`
    *[_type == "commonTech"]
  `);
  const projects: Project[] = await sanityClient.fetch(groq`
    *[_type == "project"]
  `);
  const tech: Tech[] = await sanityClient.fetch(groq`
    *[_type == "tech"]
  `);
  return {
    props: { hero, socials, about, commonTech, projects, tech },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
