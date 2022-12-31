import { m } from "framer-motion";

interface Props {
  delay?: number;
  className?: string;
  children?: any;
}

export default function HeroMotionDiv(props: Props) {
  const { delay, className, children } = props;
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3, delay }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      {children}
    </m.div>
  );
}
