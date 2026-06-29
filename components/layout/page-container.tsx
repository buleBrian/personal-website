import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = ComponentPropsWithoutRef<"div">;

export function PageContainer({ className, ...props }: PageContainerProps) {
  return <div className={cn("page-shell", className)} {...props} />;
}
