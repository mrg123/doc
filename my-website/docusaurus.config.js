module.exports = {
  title: 'mrg123.com',
  tagline: '人生没有过不去的坎,只有爬不完的坑',
  url: 'https://mrg123.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mrg123', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Doc Share',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/精准定位问题',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/mrg123/doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mrg123/doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mrg123, Inc. Built with FB Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mrg123/doc/edit/master/my-website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mrg123/doc/edit/master/my-website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
