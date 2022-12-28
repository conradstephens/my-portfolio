import { m } from "framer-motion";

interface IconMotionDivProps {
  duration: number;
  children?: any;
  className?: string;
}

export default function IconMotionDiv(props: IconMotionDivProps) {
  const { children, className, duration } = props;
  return (
    <m.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        rotate: 360,
        y: 0,
      }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </m.div>
  );
}
