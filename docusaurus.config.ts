import { themes as prismThemes } from "prism-react-renderer";
import type { Config, PluginOptions } from "@docusaurus/types";
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as PagesOptions } from "@docusaurus/plugin-content-pages";
import type { Options as ThemesOptions } from "@docusaurus/theme-classic";

import type { ThemeConfig as BaseThemeConfig } from "@docusaurus/types";
import type { UserThemeConfig as ClassicThemeConfig } from "@docusaurus/theme-common";

import { NoviaLandConfig as cfg } from "./config";

function makePluginConfig(
  source: string,
  options?: PluginOptions
): string | [string, PluginOptions] {
  if (options) {
    return [require.resolve(source), options];
  }
  return require.resolve(source);
}

const copyrightStartTime = 2020;
const currentYear = new Date().getFullYear();
const copyrightTime =
  currentYear === copyrightStartTime
    ? `${currentYear}`
    : `${copyrightStartTime}-${currentYear}`;

const books: DocsOptions[] = cfg.books.map((e) => {
  return {
    id: e.slug,
    path: `content/books/${e.path}`,
    breadcrumbs: true,
    include: ["**/*.{md,mdx}"],
    routeBasePath: `books/${e.slug}`,
  };
});

const config: Config = {
  title: "诺维亚大陆",
  favicon: "img/favicon.ico",

  url: "https://karena.moe",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    "./plugins/tailwindcss",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wiki",
        path: "content/wiki",
        breadcrumbs: true,
        include: ["**/*.{md,mdx}"],
        routeBasePath: "wiki",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "src/pages",
        routeBasePath: "/",
        include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
        mdxPageComponent: "@theme/MDXPage",
      } satisfies PagesOptions,
    ],
    [
      "@docusaurus/theme-classic",
      {
        customCss: ["./src/css/custom.css"],
      } satisfies ThemesOptions,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "诺维亚大陆",
      logo: {
        alt: "诺维亚大陆 Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
        href: "/",
        target: "self",
        width: 32,
        height: 32,
        className: "custom-navbar-logo-class",
      },
      items: cfg.navbarLinks.map((e) => {
        return {
          label: e.label,
          to: e.to,
        };
      }),
    },
    footer: {
      copyright: `Copyright © ${copyrightTime} Amaki-Aria`,
      links: cfg.footerLinks.map((e) => {
        return {
          title: e.title,
          items: e.items.map((i) => {
            return {
              label: i.label,
              to: i.external ? undefined : i.to,
              href: i.external ? i.to : undefined,
            };
          }),
        };
      }),
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } as BaseThemeConfig & ClassicThemeConfig,
};

books.forEach((e) => {
  config.plugins?.push(makePluginConfig("@docusaurus/plugin-content-docs", e));
});

export default config;
