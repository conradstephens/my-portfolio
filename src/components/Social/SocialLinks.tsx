import Link from "next/link";

interface SocialLinkProps {
  href: string;
  iconClassName: string;
}

export default function SocialLink({ iconClassName, href }: SocialLinkProps) {
  return (
    <Link
      className=" btn-ghost btn-circle btn text-3xl text-gray-600 hover:animate-bounce dark:text-gray-400"
      target="_blank"
      href={href}
    >
      <i className={iconClassName} />
    </Link>
  );
}
