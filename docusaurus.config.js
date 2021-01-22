module.exports = {
  title: 'YWH Resources',
  tagline: 'Your Worries Here',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EsenDR', // Usually your GitHub org/user name.
  projectName: 'ywhsite', // Usually your repo name.
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
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/XUYYuu4Ubw',
          label: 'Contribute!',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Mental Health',
              to: 'docs/',
            },
            {
              label: 'Anxiety',
              to: 'docs/anxiety/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/XUYYuu4Ubw',
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
              label: 'Contribute!',
              href: 'https://discord.gg/XUYYuu4Ubw',
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
            'https://discord.gg/XUYYuu4Ubw',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://discord.gg/XUYYuu4Ubw',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};