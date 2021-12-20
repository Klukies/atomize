type Route = {
  label: string;
  href: string;
  isExternal?: boolean;
};

type DocRoute = {
  label: string;
  routes: Route[];
};

export const docRoutes: DocRoute[] = [
  {
    label: 'Overview',
    routes: [
      { label: 'Introduction', href: '/docs/introduction' },
      { label: 'Tutorials', href: '/docs/tutorials' },
      { label: 'API', href: '/docs/api' },
      { label: 'Frequently asked questions', href: '/docs/faq' },
      { label: 'TypeScript', href: '/docs/typescript' },
    ],
  },
  {
    label: 'Getting started',
    routes: [
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Configuration', href: '/docs/configuration' },
      { label: 'Styling', href: '/docs/styling' },
    ],
  },
  {
    label: 'Meta',
    routes: [
      { label: 'GitHub', href: 'https://github.com/inthepocket/cookie-though', isExternal: true },
      { label: 'In The Pocket', href: 'https://www.inthepocket.com/', isExternal: true },
    ],
  },
];

export default docRoutes;
