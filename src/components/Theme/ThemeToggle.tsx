import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleLight = () => {
    setTheme("light");
  };

  const toggleDark = () => {
    setTheme("dark");
  };

  const toggleSystem = () => {
    setTheme("system");
  };

  return (
    <div className="dropdown-end dropdown">
      <label
        tabIndex={0}
        className="swap btn-ghost swap-rotate btn-square btn relative m-1"
      >
        <input
          className="invisible"
          type="checkbox"
          checked={resolvedTheme === "light"}
        />
        <SunIcon className="swap-on max-md:h-4 max-md:w-4 md:h-5 md:w-5" />
        <MoonIcon className="swap-off max-md:h-4 max-md:w-4 md:h-5 md:w-5 " />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow-2xl dark:bg-neutral"
      >
        <li>
          <a
            className="flex w-full items-center rounded-md px-2 py-2 text-sm"
            onClick={toggleLight}
          >
            <SunIcon className="mr-2 h-5 w-5" />
            Light
          </a>
        </li>
        <li>
          <a
            className="flex w-full items-center rounded-md px-2 py-2 text-sm"
            onClick={toggleDark}
          >
            <MoonIcon className="mr-2 h-5 w-5" />
            Dark
          </a>
        </li>
        <li>
          <a
            className="flex w-full items-center rounded-md px-2 py-2 text-sm"
            onClick={toggleSystem}
          >
            <ComputerDesktopIcon className="mr-2 h-5 w-5" />
            System
          </a>
        </li>
      </ul>
    </div>
  );
}
