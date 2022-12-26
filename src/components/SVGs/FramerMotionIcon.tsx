export default function FramerMotionIcon(props: { className?: string }) {
  const { className } = props;
  return (
    <svg
      className={className}
      strokeWidth="0"
      role="presentation"
      viewBox="0 0 24 24"
      focusable="false"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title></title>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
    </svg>
  );
}