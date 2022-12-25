import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  label: string;
  showButton: boolean;
  id: string;
}

const Button = (props: ButtonProps) => {
  const { showButton, id, label } = props;
  return (
    <Link
      href={`/#${id.replace("Button", "")}`}
      className={clsx(
        "btn-ghost btn normal-case opacity-0 transition-opacity duration-500 ease-in-out xl:visible",
        showButton
          ? "visible opacity-100"
          : " visible md:invisible xl:opacity-100"
      )}
      id={id}
    >
      {label}
    </Link>
  );
};

export default function NavButtons(props: { showButtons: boolean }) {
  const { showButtons } = props;
  return (
    <div className="flex flex-col sm:flex-row">
      <Button id="aboutButton" label="About" showButton={showButtons} />
      <Button id="projectsButton" label="Projects" showButton={showButtons} />
      <Button id="contactButton" label="Contact" showButton={showButtons} />
    </div>
  );
}
