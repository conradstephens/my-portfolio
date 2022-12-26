import Link from "next/link";

interface SocialLinkProps {
  href: string;
  iconClassName: string;
  label: string;
}

export default function SocialLink({
  iconClassName,
  href,
  label,
}: SocialLinkProps) {
  return (
    <Link
      aria-label={label}
      className=" btn-ghost btn-circle btn text-3xl text-gray-600 hover:animate-bounce dark:text-gray-400"
      target="_blank"
      href={href}
    >
      <i className={iconClassName} />
    </Link>
  );
}
