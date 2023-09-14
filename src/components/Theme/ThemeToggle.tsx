"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const onChange = () =>
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");

  return (
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
  );
}
