import * as React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavButtons from "./NavButtons";
import clsx from "clsx";

interface NavToggleProps {
  showButtons: boolean;
  setShowButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavToggle(props: NavToggleProps) {
  const { showButtons, setShowButtons } = props;
  const onClick = () => {
    setShowButtons(!showButtons);
  };

  const onChange = () => null;

  return (
    <>
      <label className="swap btn-ghost swap-rotate btn-square btn relative">
        <input
          className="invisible"
          id="my-modal"
          type="checkbox"
          checked={showButtons}
          onChange={onClick}
        />
        <XMarkIcon className="swap-on h-6 w-6" />
        <Bars3Icon className="swap-off h-5 w-5" />
      </label>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={showButtons}
        onChange={onChange}
        id="my-modal"
        className="modal-toggle"
      />
      <label
        htmlFor="my-modal"
        className={clsx(
          "modal cursor-pointer bg-base-100 opacity-0 transition-all ease-in-out md:invisible",
          showButtons && "opacity-90"
        )}
      >
        <label className="relative bg-transparent md:hidden" htmlFor="">
          <NavButtons
            showButtons={showButtons}
            setShowButtons={setShowButtons}
          />
        </label>
      </label>
    </>
  );
}
