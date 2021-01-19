module.exports = {
  title: 'YWH Resources',
  tagline: 'Your Worries Here',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EsenDR', // Usually your GitHub org/user name.
  projectName: 'ywh-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'YWH Website',
      logo: {
        alt: 'YWHicon',
        src: 'img/YWHicon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'resources',
          label: 'Resources',
          position: 'left',
        },
        {to: 'blog', label: 'Test', position: 'left'},
        {
          href: 'https://github.com/EsenDR/ywh-website/tree/main/my-website',
          label: 'Test',
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
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/anxiety/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Test',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/EsenDR/ywh-website/tree/main/my-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YWH Resources website made by Esen Patel`,
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
            'https://github.com/EsenDR/ywh-website/tree/main/my-website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EsenDR/ywh-website/tree/main/my-website/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};