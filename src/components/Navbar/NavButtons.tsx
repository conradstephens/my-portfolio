import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  showButton: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, showButton, ...other } = props;
  return (
    <button
      className={clsx(
        "btn-ghost btn normal-case opacity-0 transition-opacity duration-500 ease-in-out xl:visible",
        showButton
          ? "visible opacity-100"
          : " visible md:invisible xl:opacity-100"
      )}
      {...other}
    >
      {label}
    </button>
  );
};

export default function NavButtons(props: { showButtons: boolean }) {
  const { showButtons } = props;
  const { push } = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    push(`/#${id.replace("Button", "")}`, undefined, { shallow: true }).catch(
      (e) => console.log(e)
    );
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <Button
        id="aboutButton"
        label="About"
        showButton={showButtons}
        onClick={onClick}
      />
      <Button
        id="projectsButton"
        label="Projects"
        showButton={showButtons}
        onClick={onClick}
      />
      {/* <Button id="solutionsButton" label="Solutions" showButton={showButtons} /> */}
      {/* <Button id="contactButton" label="Contact" showButton={showButtons} /> */}
    </div>
  );
}
