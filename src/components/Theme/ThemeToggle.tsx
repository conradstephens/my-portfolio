import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const onChange = () =>
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <label
        tabIndex={0}
        className="swap btn-ghost swap-rotate btn-square btn relative m-1"
      >
        <input
          className="invisible"
          type="checkbox"
          checked={resolvedTheme === "light"}
          onChange={onChange}
        />
        <SunIcon className="swap-on max-md:h-4 max-md:w-4 md:h-5 md:w-5" />
        <MoonIcon className="swap-off max-md:h-4 max-md:w-4 md:h-5 md:w-5 " />
      </label>
    </motion.div>
  );
}
