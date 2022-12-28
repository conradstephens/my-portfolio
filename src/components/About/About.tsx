import { m } from "framer-motion";
import {
  SkillIcon,
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
  return (
    <div className="hero">
      <div className="hero-content flex max-w-screen-md flex-col items-start">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-5xl font-medium">About me</h3>
          <p className="text-md py-2 leading-8 text-base-content/75">
            {"I've been working as a "}full-stack developer for the past three
            years. During this time, {"I've"} architected databases that scale
            for thousands of users, helped implement user-friendly UI/UX for
            several companies, collaborated with talented designers, and faced
            constructive criticism from users. Lately I have shifted toward
            learning and developing web3/decentralized applications.
          </p>
          <p className="text-md py-4 leading-8 text-base-content/75">
            Below are the more common technologies I utilize in my development.
          </p>
        </m.div>

        <div className="grid grid-cols-2 grid-rows-4 text-base-content sm:grid-cols-8 sm:grid-rows-1 sm:space-x-0">
          <div className="mr-10 flex items-center sm:mr-0">
            <IconMotionDiv duration={0.3}>
              <SkillIcon
                href="https://redux-toolkit.js.org/"
                tooltipTitle="Redux Toolkit"
              >
                <ReduxToolkitIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={0.3} className="sm:hidden">
              Redux Toolkit
            </IconMotionDiv>
          </div>
          <div className="flex items-center">
            <IconMotionDiv duration={0.5}>
              <SkillIcon href="https://nextjs.org/" tooltipTitle="NextJS">
                <NextJSIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={0.5} className="sm:hidden">
              NextJS
            </IconMotionDiv>
          </div>
          <div className="flex items-center sm:mr-0">
            <IconMotionDiv duration={0.7}>
              <SkillIcon href="https://reactjs.org/" tooltipTitle="ReactJS">
                <ReactJSIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={0.7} className="sm:hidden">
              ReactJS
            </IconMotionDiv>
          </div>
          <div className="flex items-center">
            <IconMotionDiv duration={0.9}>
              <SkillIcon
                href="https://www.typescriptlang.org/"
                tooltipTitle="Typescript"
              >
                <TypescriptIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={0.9} className="sm:hidden">
              Typescript
            </IconMotionDiv>
          </div>
          <div className="mr-10 flex items-center sm:mr-0">
            <IconMotionDiv duration={1.1}>
              <SkillIcon
                href="https://tailwindcss.com/"
                tooltipTitle="Tailwind CSS"
              >
                <TailwindCSSIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={1.1} className="sm:hidden">
              Tailwind CSS
            </IconMotionDiv>
          </div>
          <div className="flex items-center">
            <IconMotionDiv duration={1.1}>
              <SkillIcon
                href="https://firebase.google.com/"
                tooltipTitle="Firebase"
              >
                <FirebaseIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={1.1} className="sm:hidden">
              Firebase
            </IconMotionDiv>
          </div>
          <div className="mr-10 flex items-center sm:mr-0">
            <IconMotionDiv duration={1.1}>
              <SkillIcon
                href="https://www.framer.com/motion/"
                tooltipTitle="Framer Motion"
              >
                <FramerMotionIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={1.1} className="sm:hidden">
              Framer Motion
            </IconMotionDiv>
          </div>
          <div className="flex items-center">
            <IconMotionDiv duration={1.1}>
              <SkillIcon
                href="https://mui.com/core/"
                tooltipTitle="Material UI"
              >
                <MaterialUIIcon className="skill-icon" />
              </SkillIcon>
            </IconMotionDiv>
            <IconMotionDiv duration={1.1} className="sm:hidden">
              Material UI
            </IconMotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
