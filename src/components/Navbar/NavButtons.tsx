import * as React from "react";
import clsx from "clsx";
import Link from "next/link";

interface NavButtonsProps {
  showButtons: boolean;
  setNavState: React.Dispatch<
    React.SetStateAction<{
      showButtons: boolean;
      showNav: boolean;
    }>
  >;
}

interface ButtonProps {
  label: string;
  showButton: boolean;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { showButton, onClick, label } = props;
  return (
    <Link href={`/#${label.toLowerCase()}`} onClick={onClick}>
      <button
        className={clsx(
          "btn-ghost btn-lg btn normal-case md:btn-md xl:block",
          showButton ? "block" : "hidden"
        )}
      >
        {label}
      </button>
    </Link>
  );
};

export default function NavButtons(props: NavButtonsProps) {
  const { showButtons, setNavState } = props;

  const hideButtons = () => {
    setNavState({ showButtons: false, showNav: false });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Button label="About" showButton={showButtons} onClick={hideButtons} />
      <Button label="Projects" showButton={showButtons} onClick={hideButtons} />
      <Button label="Contact" showButton={showButtons} onClick={hideButtons} />
    </div>
  );
}
