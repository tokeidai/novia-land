export type Link = {
  label: string;
  to: string;
  external?: boolean;
};

export type LinkGroup = {
  title: string;
  items: Link[];
};

export type Book = {
  title: string;
  slug: string;
  path: string;
  series: string;
  seriesOrder: number;
};

export type Config = {
  navbarLinks: Link[];
  footerLinks: LinkGroup[];
  books: Book[];
};
