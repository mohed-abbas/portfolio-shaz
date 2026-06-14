import { ReactNode } from "react";

export const cardClass =
  "relative overflow-hidden rounded-3xl bg-surface border border-line/10 card-hover";

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
  const baseClass = `${cardClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return <div className={baseClass}>{children}</div>;
}
