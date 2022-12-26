import Link from "next/link";

interface SkillIconProps {
  children?: any;
  href: string;
  tooltipTitle: string;
}

export default function SkillIcon(props: SkillIconProps) {
  const { children, href, tooltipTitle } = props;
  return (
    <>
      <div className="tooltip hidden sm:block" data-tip={tooltipTitle}>
        <Link href={href} target="_blank" className="skill-icon-link">
          {children}
        </Link>
      </div>
      <Link href={href} target="_blank" className="skill-icon-link sm:hidden">
        {children}
      </Link>
    </>
  );
}
