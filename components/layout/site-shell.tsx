import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
  footer?: ReactNode;
};

export function SiteShell({ children, footer }: SiteShellProps) {
  return (
    <div className="site-shell">
      <main className="site-main">{children}</main>
      {footer}
    </div>
  );
}
