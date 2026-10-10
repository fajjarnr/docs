export type PageMeta = {
  path: string;
  title: string;
  section: string;
  description: string;
  updated?: string;
  heroImage?: string;
};

export const versions = ['4.11', '4.10'] as const;

export type ChangelogTag = 'NEW' | 'IMPROVEMENT' | 'FIX';

export type ChangelogEntry = {
  version: string;
  tag: ChangelogTag;
  date: string;
  title: string;
  body: string;
};

export const changelog: ChangelogEntry[] = [
  {
    version: '4.11',
    tag: 'NEW',
    date: '2026-10-11',
    title: 'Scaffold: changelog rendering proof',
    body: 'Scaffold example entry proving the changelog list, version tag, and date render from data. No product change is described here.',
  },
  {
    version: '4.11',
    tag: 'IMPROVEMENT',
    date: '2026-10-04',
    title: 'Scaffold: article skeleton proof',
    body: 'Scaffold example entry proving article pages render a breadcrumb, title, and anchor headings. No product change is described here.',
  },
  {
    version: '4.10',
    tag: 'FIX',
    date: '2026-09-27',
    title: 'Scaffold: chip and grid proof',
    body: 'Scaffold example entry proving 6px chips and the two-column modules grid. No product change is described here.',
  },
];

export const sections = [
  { name: 'Home', path: '/' },
  { name: 'Get started', path: '/get-started' },
  { name: 'Modules', path: '/modules' },
  { name: 'Changelog', path: '/changelog' },
] as const;

export const getStarted: PageMeta[] = [
  {
    path: '/get-started/quickstart',
    title: 'Quickstart',
    section: 'Get started',
    description: 'The fastest working path, end to end.',
    updated: '2026-10-11',
    heroImage: '/images/quickstart-overview.svg',
  },
  {
    path: '/get-started/installation',
    title: 'Installation',
    section: 'Get started',
    description: 'Install the pieces in the order that avoids rework.',
    updated: '2026-10-11',
    heroImage: '/images/installation-steps.svg',
  },
  {
    path: '/get-started/core-concepts',
    title: 'Core concepts',
    section: 'Get started',
    description: 'The vocabulary and model everything else builds on.',
    updated: '2026-10-11',
    heroImage: '/images/core-concepts-model.svg',
  },
  {
    path: '/get-started/configuration',
    title: 'Configuration',
    section: 'Get started',
    description: 'Every setting, with defaults and examples.',
    updated: '2026-10-11',
    heroImage: '/images/configuration-keys.svg',
  },
  {
    path: '/get-started/troubleshooting',
    title: 'Troubleshooting',
    section: 'Get started',
    description: 'Common failures, their causes, and the fix.',
    updated: '2026-10-11',
    heroImage: '/images/troubleshooting-flow.svg',
  },
];

export const modules: PageMeta[] = [
  {
    path: '/modules/module-a',
    title: 'Module A',
    section: 'Modules',
    description: 'Reserved for one product module.',
    updated: '2026-10-11',
    heroImage: '/images/module-topology.svg',
  },
  {
    path: '/modules/module-b',
    title: 'Module B',
    section: 'Modules',
    description: 'Reserved for one product module.',
    updated: '2026-10-11',
    heroImage: '/images/module-topology.svg',
  },
  {
    path: '/modules/module-c',
    title: 'Module C',
    section: 'Modules',
    description: 'Reserved for one product module.',
    updated: '2026-10-11',
    heroImage: '/images/module-topology.svg',
  },
  {
    path: '/modules/module-d',
    title: 'Module D',
    section: 'Modules',
    description: 'Reserved for one product module.',
    updated: '2026-10-11',
    heroImage: '/images/module-topology.svg',
  },
  {
    path: '/modules/module-e',
    title: 'Module E',
    section: 'Modules',
    description: 'Reserved for one product module.',
    updated: '2026-10-11',
    heroImage: '/images/module-topology.svg',
  },
  {
    path: '/modules/module-f',
    title: 'Module F',
    section: 'Modules',
    description: 'Reserved for one product module.',
    updated: '2026-10-11',
    heroImage: '/images/module-topology.svg',
  },
];

export const moduleSubpages: Record<string, { path: string; title: string; description: string }[]> = {
  'module-a': [
    { path: '/modules/module-a/overview', title: 'Overview', description: 'Dummy placeholder for the Module A overview; no product behavior described yet.' },
    { path: '/modules/module-a/configuration', title: 'Configuration', description: 'Dummy placeholder for Module A configuration; not real settings.' },
    { path: '/modules/module-a/reference', title: 'Reference', description: 'Dummy placeholder for the Module A reference; nothing here is normative.' },
  ],
  'module-b': [
    { path: '/modules/module-b/overview', title: 'Overview', description: 'Dummy placeholder for the Module B overview; no product behavior described yet.' },
    { path: '/modules/module-b/configuration', title: 'Configuration', description: 'Dummy placeholder for Module B configuration; not real settings.' },
    { path: '/modules/module-b/reference', title: 'Reference', description: 'Dummy placeholder for the Module B reference; nothing here is normative.' },
  ],
  'module-c': [
    { path: '/modules/module-c/overview', title: 'Overview', description: 'Dummy placeholder for the Module C overview; no product behavior described yet.' },
    { path: '/modules/module-c/configuration', title: 'Configuration', description: 'Dummy placeholder for Module C configuration; not real settings.' },
    { path: '/modules/module-c/reference', title: 'Reference', description: 'Dummy placeholder for the Module C reference; nothing here is normative.' },
  ],
  'module-d': [
    { path: '/modules/module-d/overview', title: 'Overview', description: 'Dummy placeholder for the Module D overview; no product behavior described yet.' },
    { path: '/modules/module-d/configuration', title: 'Configuration', description: 'Dummy placeholder for Module D configuration; not real settings.' },
    { path: '/modules/module-d/reference', title: 'Reference', description: 'Dummy placeholder for the Module D reference; nothing here is normative.' },
  ],
  'module-e': [
    { path: '/modules/module-e/overview', title: 'Overview', description: 'Dummy placeholder for the Module E overview; no product behavior described yet.' },
    { path: '/modules/module-e/configuration', title: 'Configuration', description: 'Dummy placeholder for Module E configuration; not real settings.' },
    { path: '/modules/module-e/reference', title: 'Reference', description: 'Dummy placeholder for the Module E reference; nothing here is normative.' },
  ],
  'module-f': [
    { path: '/modules/module-f/overview', title: 'Overview', description: 'Dummy placeholder for the Module F overview; no product behavior described yet.' },
    { path: '/modules/module-f/configuration', title: 'Configuration', description: 'Dummy placeholder for Module F configuration; not real settings.' },
    { path: '/modules/module-f/reference', title: 'Reference', description: 'Dummy placeholder for the Module F reference; nothing here is normative.' },
  ],
};

export const moduleArticles: Record<string, Record<string, { path: string; title: string; description: string }[]>> = {
  'module-a': {
    overview: [
      { path: '/modules/module-a/overview/getting-oriented', title: 'Getting oriented', description: 'Dummy placeholder for getting oriented in the Module A overview; no product behavior described yet.' },
      { path: '/modules/module-a/overview/first-walkthrough', title: 'First walkthrough', description: 'Dummy placeholder for a first walkthrough of the Module A overview; not real steps.' },
    ],
    configuration: [
      { path: '/modules/module-a/configuration/basic-setup', title: 'Basic setup', description: 'Dummy placeholder for basic setup in Module A configuration; not real settings.' },
      { path: '/modules/module-a/configuration/advanced-tuning', title: 'Advanced tuning', description: 'Dummy placeholder for advanced tuning in Module A configuration; nothing here is normative.' },
    ],
    reference: [
      { path: '/modules/module-a/reference/api-index', title: 'API index', description: 'Dummy placeholder for the Module A reference API index; nothing here is normative.' },
      { path: '/modules/module-a/reference/field-glossary', title: 'Field glossary', description: 'Dummy placeholder for the Module A reference field glossary; no product behavior described yet.' },
    ],
  },
  'module-b': {},
  'module-c': {},
  'module-d': {},
  'module-e': {},
  'module-f': {},
};
const moduleIcons = ['arch', 'hexagon', 'grid', 'wave', 'diamond', 'orbit'] as const;

export const moduleNav = modules.map((m, i) => {
  const slug = m.path.split('/').pop() ?? '';
  const articles = moduleArticles[slug] ?? {};
  return {
    path: m.path,
    title: m.title,
    icon: moduleIcons[i % moduleIcons.length],
    children: (moduleSubpages[slug] ?? []).map((s) => {
      const subSlug = s.path.split('/').pop() ?? '';
      const kids = articles[subSlug];
      return kids?.length ? { path: s.path, title: s.title, children: kids.map((a) => ({ path: a.path, title: a.title })) } : { path: s.path, title: s.title };
    }),
  };
});

export const pages: PageMeta[] = [
  {
    path: '/',
    title: 'Docs Fajar',
    section: 'Home',
    description: 'The new home of the documentation.',
  },
  ...getStarted,
  ...modules,
  ...Object.values(moduleSubpages)
    .flat()
    .map(
      (s): PageMeta => ({
        ...s,
        section: 'Modules',
        updated: '2026-10-11',
        heroImage: '/images/module-topology.svg',
      }),
    ),
  ...Object.values(moduleArticles)
    .flatMap((subs) => Object.values(subs).flat())
    .map(
      (a): PageMeta => ({
        ...a,
        section: 'Modules',
        updated: '2026-10-11',
        heroImage: '/images/module-topology.svg',
      }),
    ),
  {
    path: '/changelog',
    title: 'Changelog',
    section: 'Changelog',
    description: 'No entries yet. This page exists so the link resolves.',
  },
];
