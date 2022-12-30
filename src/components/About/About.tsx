import Link from "next/link";
import { m } from "framer-motion";
import {
  NextJSIcon,
  ReduxToolkitIcon,
  ReactJSIcon,
  TypescriptIcon,
  TailwindCSSIcon,
  FirebaseIcon,
  FramerMotionIcon,
  MaterialUIIcon,
  IconMotionDiv,
} from "@/components";

export default function About() {
  const skillIcons = [
    {
      href: "https://redux-toolkit.js.org/",
      title: "Redux Toolkit",
      Icon: ReduxToolkitIcon,
      animationDuration: 0.3,
      containerClassName: "mr-10 flex items-center sm:mr-0",
    },
    {
      href: "https://nextjs.org/",
      title: "NextJS",
      Icon: NextJSIcon,
      animationDuration: 0.5,
      containerClassName: "flex items-center",
    },
    {
      href: "https://reactjs.org/",
      title: "ReactJS",
      Icon: ReactJSIcon,
      animationDuration: 0.7,
      containerClassName: "flex items-center sm:mr-0",
    },
    {
      href: "https://www.typescriptlang.org/",
      title: "Typescript",
      Icon: TypescriptIcon,
      animationDuration: 0.9,
      containerClassName: "flex items-center",
    },
    {
      href: "https://tailwindcss.com/",
      title: "Tailwind CSS",
      Icon: TailwindCSSIcon,
      animationDuration: 1.1,
      containerClassName: "mr-10 flex items-center sm:mr-0",
    },
    {
      href: "https://firebase.google.com/",
      title: "Firebase",
      Icon: FirebaseIcon,
      animationDuration: 1.3,
      containerClassName: "flex items-center",
    },
    {
      href: "https://www.framer.com/motion/",
      title: "Framer Motion",
      Icon: FramerMotionIcon,
      animationDuration: 1.5,
      containerClassName: "mr-10 flex items-center sm:mr-0",
    },
    {
      href: "https://mui.com/core/",
      title: "Material UI",
      Icon: MaterialUIIcon,
      animationDuration: 1.7,
      containerClassName: "flex items-center",
    },
  ];
  return (
    <div className="hero">
      <div className="hero-content flex max-w-screen-md flex-col items-start">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">About me</h3>
          <p className="py-2 text-lg leading-8 text-base-content/75">
            {"I've been working as a "}full-stack developer for the past three
            years. During this time, {"I've"} architected databases that scale
            for thousands of users, helped implement user-friendly UI/UX for
            several companies, collaborated with talented designers, and faced
            constructive criticism from users. Lately I have shifted toward
            learning and developing web3/decentralized applications.
          </p>
          <p className="py-4 text-lg leading-8 text-base-content/75">
            Below are the more common technologies I utilize in my development.
          </p>
        </m.div>

        <div className="grid grid-cols-2 grid-rows-4 text-base-content sm:grid-cols-8 sm:grid-rows-1 sm:space-x-0">
          {skillIcons.map(
            (
              { containerClassName, Icon, animationDuration, title, href },
              index
            ) => (
              <div key={index} className={containerClassName}>
                <IconMotionDiv duration={animationDuration} rotate={360}>
                  <div className="tooltip hidden sm:block" data-tip={title}>
                    <Link
                      aria-label={title}
                      href={href}
                      target="_blank"
                      className="skill-icon-link"
                    >
                      <Icon className="skill-icon" />
                    </Link>
                  </div>
                  <Link
                    aria-label={title}
                    href={href}
                    target="_blank"
                    className="skill-icon-link sm:hidden"
                  >
                    <Icon className="skill-icon" />
                  </Link>
                </IconMotionDiv>
                <IconMotionDiv
                  duration={animationDuration}
                  className="sm:hidden"
                >
                  {title}
                </IconMotionDiv>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
