import type { ComponentType, SVGProps } from "react";
import { FaGithub, FaInstagram, FaWeixin } from "react-icons/fa6";

import type { SiteLink } from "@/lib/site";

import { LinkCard } from "./LinkCard";

type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

const socialIcons = {
  instagram: FaInstagram as SocialIcon,
  wechat: FaWeixin as SocialIcon,
  github: FaGithub as SocialIcon,
} as const;

type LinksProps = {
  items: readonly SiteLink[];
};

export function Links({ items }: LinksProps) {
  return (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((link) => (
        <LinkCard
          key={link.id}
          href={link.href}
          linkType={link.type}
          icon={socialIcons[link.icon]}
          label={link.title}
        />
      ))}
    </div>
  );
}
