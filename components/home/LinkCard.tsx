import type { ComponentType, SVGProps } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LinkCardProps = {
  href?: string;
  linkType?: "internal" | "external";
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
};

export function LinkCard({
  href,
  linkType = "internal",
  icon: Icon,
  label,
  className,
}: LinkCardProps) {
  const content = (
    <>
      <span className="flex size-10 items-center justify-center rounded-full border border-border bg-accent-soft text-accent transition duration-200 ease-out group-hover:scale-105">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span className="text-sm font-semibold tracking-wide sm:text-base">
        {label}
      </span>
    </>
  );

  const cardClassName = cn(
    "group flex h-full items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-foreground shadow-card transition duration-200 ease-out hover:-translate-y-1 hover:border-border-hover hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    className,
  );

  if (!href) {
    return (
      <div className={cardClassName} aria-label={label}>
        {content}
      </div>
    );
  }

  if (linkType === "external") {
    return (
      <a
        href={href}
        className={cardClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cardClassName}
    >
      {content}
    </Link>
  );
}
