import Image from "next/image";
import Link from "next/link";
import HeroMotionDiv from "./HeroMotionDiv";
import type { Hero as HeroTypes, Social } from "@/types";
import { urlFor } from "sanity";

interface Props {
  hero: HeroTypes;
  socials: Social[];
}

export default function Hero(props: Props) {
  const { hero, socials } = props;
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex max-w-screen-md flex-col items-center md:flex-row">
        <div className="max-w-[388px]">
          <HeroMotionDiv>
            <h1 className="py-2 text-5xl font-medium">
              {`${hero?.firstName} `}
              <span className="inline-block transition-all duration-200 hover:scale-110">
                {hero?.lastName}
              </span>
            </h1>
          </HeroMotionDiv>
          <HeroMotionDiv delay={0.1}>
            <h2 className="py-2 text-2xl text-primary">{hero?.jobTitle}</h2>
          </HeroMotionDiv>
          <HeroMotionDiv delay={0.4}>
            <p className="py-5 text-lg leading-8 text-base-content/75">
              {hero?.backgroundInfo}
            </p>
          </HeroMotionDiv>
          <HeroMotionDiv
            delay={0.3}
            className="flex flex-col items-start gap-4 sm:flex-row sm:gap-0"
          >
            <Link
              href="/#contact"
              className="btn btn-primary normal-case hover:animate-pulse"
            >
              {"Let's get in touch!🚀"}
            </Link>

            <div className="gap-0.1 flex justify-center">
              {socials?.map(({ className, label, url, _id }) => (
                <Link
                  href={url}
                  key={_id}
                  aria-label={label}
                  className=" btn btn-circle btn-ghost text-3xl text-gray-600 hover:animate-bounce dark:text-gray-400"
                  target="_blank"
                >
                  <i className={className} />
                </Link>
              ))}
            </div>
          </HeroMotionDiv>
        </div>

        <HeroMotionDiv
          delay={0.7}
          className="relative mx-auto h-60 w-60 overflow-hidden rounded-full bg-gradient-to-b from-primary sm:h-80 sm:w-80"
        >
          <Image
            alt="portrait"
            fill
            priority
            style={{ objectFit: "cover", marginLeft: 10 }}
            src={urlFor(hero?.image).url()}
          />
        </HeroMotionDiv>
      </div>
    </div>
  );
}
