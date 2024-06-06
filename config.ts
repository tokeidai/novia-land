import { Config, Link, Book } from "./types";

const books: Book[] = [];

const innerLinks: Link[] = [
  {
    label: "档案馆",
    to: "/wiki",
  },
  {
    label: "关于",
    to: "/about",
  },
  {
    label: "书架",
    to: "/bookshelf",
  },
];

const socialLinks: Link[] = [
  {
    label: "GitHub",
    to: "https://github.com/tokeidai/novia-land",
    external: true,
  },
  {
    label: "读者群 (QQ)",
    to: "https://qm.qq.com/q/ayrDuAgzle",
    external: true,
  },
];

export const NoviaLandConfig: Config = {
  navbarLinks: innerLinks,
  footerLinks: [
    {
      title: "诺维亚大陆",
      items: innerLinks,
    },
    {
      title: "社区",
      items: socialLinks,
    },
  ],
  books: books,
};
