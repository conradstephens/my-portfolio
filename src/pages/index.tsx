import { ContactMe, Navbar, Hero, About, Projects } from "@/components";
import type { GetStaticProps } from "next";
import type { Hero as HeroTypes, Social } from "@/types";
import { sanityClient } from "sanity";
import { groq } from "next-sanity";

type Props = {
  hero: HeroTypes;
  socials: Social[];
};

export default function Index(props: Props) {
  const { hero, socials } = props;
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const hero: HeroTypes = await sanityClient.fetch(groq`
    *[_type == "hero"][0]
  `);
  const socials: Social[] = await sanityClient.fetch(groq`
    *[_type == "social"]
  `);
  return {
    props: { hero, socials },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
