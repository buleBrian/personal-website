import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type PageSectionProps = ComponentPropsWithoutRef<"section">;

export function PageSection({ className, ...props }: PageSectionProps) {
  return <section className={cn("section-space", className)} {...props} />;
}
