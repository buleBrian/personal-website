export const siteConfig = {
  name: "土狗看世界",
  hero: {
    subtitle: "什么？？我是土狗",
    description: "遗憾的不该是我。",
  },
  links: [
    {
      id: "instagram",
      title: "Instagram",
      href: "https://www.instagram.com/urbanwetdog/",
      type: "external",
      icon: "instagram",
    },
    {
      id: "wechat",
      title: "WeChat",
      href: "/wechat",
      type: "internal",
      icon: "wechat",
    },
    {
      id: "github",
      title: "GitHub",
      href: "https://github.com/buleBrian",
      type: "external",
      icon: "github",
    },
  ],
} as const;

export type SiteLink = (typeof siteConfig.links)[number];
