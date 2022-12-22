import * as React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

interface NavToggleProps {
  showButtons: boolean;
  setShowButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavToggle(props: NavToggleProps) {
  const { showButtons, setShowButtons } = props;

  const onClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <label className="swap btn-ghost swap-rotate btn-square btn relative">
      <input
        className="invisible"
        type="checkbox"
        checked={showButtons}
        onChange={onClick}
      />
      <XMarkIcon className="swap-on h-6 w-6" />
      <Bars3Icon className="swap-off h-5 w-5" />
    </label>
  );
}
