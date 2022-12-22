import { ThemeToggle } from "../Theme";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn-ghost btn-square btn">
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Website Starter</a>
      </div>
      <div className="flex-none">
        <ThemeToggle />
      </div>
    </div>
  );
}
