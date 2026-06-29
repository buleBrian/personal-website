import type { ReactNode } from "react";

import { PageContainer, PageSection, SiteShell } from "@/components/layout";

type HomeLayoutProps = {
  hero?: ReactNode;
  projects?: ReactNode;
  blog?: ReactNode;
  footer?: ReactNode;
};

export function HomeLayout({
  hero,
  projects,
  blog,
  footer,
}: HomeLayoutProps) {
  return (
    <SiteShell footer={footer}>
      <PageContainer>
        {hero ? <PageSection>{hero}</PageSection> : null}
        {projects ? <PageSection>{projects}</PageSection> : null}
        {blog ? <PageSection>{blog}</PageSection> : null}
      </PageContainer>
    </SiteShell>
  );
}
