import * as React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavButtons from "./NavButtons";
import clsx from "clsx";

interface NavToggleProps {
  showButtons: boolean;
  setNavState: React.Dispatch<
    React.SetStateAction<{
      showButtons: boolean;
      showNav: boolean;
    }>
  >;
}

export default function NavToggle(props: NavToggleProps) {
  const { showButtons, setNavState } = props;
  const onClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    e.preventDefault();
    setNavState((prevState) => {
      return { ...prevState, showButtons: !showButtons };
    });
  };

  const onChange = () => {
    setNavState((prevState) => {
      return { ...prevState, showButtons: !showButtons };
    });
  };

  return (
    <>
      <label className="swap btn-ghost swap-rotate btn-square btn relative">
        <input
          className="invisible"
          type="checkbox"
          checked={showButtons}
          onChange={onChange}
        />
        <XMarkIcon className="swap-on h-6 w-6" />
        <Bars3Icon className="swap-off h-5 w-5" />
      </label>

      <label
        className={clsx(
          "modal cursor-pointer bg-base-100 opacity-0 transition-all ease-in-out md:invisible",
          showButtons && "modal-open opacity-90"
        )}
        onClick={onClick}
      >
        <label className="relative bg-transparent md:hidden" htmlFor="">
          <NavButtons showButtons={showButtons} setNavState={setNavState} />
        </label>
      </label>
    </>
  );
}
