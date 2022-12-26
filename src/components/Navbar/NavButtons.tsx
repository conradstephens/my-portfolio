import * as React from "react";
import clsx from "clsx";
import Link from "next/link";

interface NavButtonsProps {
  showButtons: boolean;
  setShowButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ButtonProps {
  label: string;
  showButton: boolean;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { showButton, onClick, label } = props;
  return (
    <Link
      href={`/#${label.toLowerCase()}`}
      className={clsx(
        "btn-ghost btn-lg btn normal-case opacity-0 transition-opacity duration-500 ease-in-out md:btn-md xl:visible xl:opacity-100",
        showButton && "visible opacity-100"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default function NavButtons(props: NavButtonsProps) {
  const { showButtons, setShowButtons } = props;

  const hideButtons = () => {
    setShowButtons(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Button label="About" showButton={showButtons} onClick={hideButtons} />
      <Button label="Projects" showButton={showButtons} onClick={hideButtons} />
      <Button label="Contact" showButton={showButtons} onClick={hideButtons} />
    </div>
  );
}
