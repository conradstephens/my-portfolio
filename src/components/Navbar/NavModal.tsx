import * as React from "react";
import clsx from "clsx";
import NavButtons from "./NavButtons";

interface NavModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavModal(props: NavModalProps) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      onClick={handleClose}
      className={clsx(
        "invisible fixed top-0 left-0 right-0 bottom-0 z-50 bg-base-100 bg-opacity-90",
        open && "max-sm:visible md:invisible"
      )}
    >
      <div
        className={clsx(
          "absolute top-1/4 left-1/4 hidden h-2/4 w-2/4",
          open && "max-sm:block md:hidden"
        )}
      >
        <NavButtons showButtons={open} />
      </div>
    </div>
  );
}
