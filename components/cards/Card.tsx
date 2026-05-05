import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  as?: "div" | "a" | "article";
}

export default function Card({
  children,
  className = "",
  href,
}: CardProps) {
  const baseClass = `relative overflow-hidden rounded-3xl bg-white border border-ink-900/[0.06] card-hover ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return <div className={baseClass}>{children}</div>;
}
