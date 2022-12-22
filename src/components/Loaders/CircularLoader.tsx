import clsx from "clsx";

interface ComponentProps {
  className?: string;
  disabled?: boolean;
}

export default function CircularLoader(props: ComponentProps) {
  const { className, disabled } = props;
  return (
    <svg
      className={clsx(
        "mr-3 h-5 w-5 animate-spin text-primary",
        className,
        disabled && "text-disabled-light dark:text-disabled-dark"
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
