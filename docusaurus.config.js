/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'YWH Resources',
  tagline: '💔Your Worries Here❤',
  url: 'https://www.ywhpdb.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/YWHicon.svg',
  organizationName: 'EsenDR',
  projectName: 'ywhsite',
  themeConfig: {
    navbar: {
      title: 'YWH Website',
      logo: {
        alt: 'YWHicon',
        src: 'img/YWHicon.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Resources',
        },
        {
          href: 'https://github.com/EsenDR/ywhsite',
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
              label: 'Information',
              to: '/docs/intro',
            },
            {
              label: 'Mental Health',
              to: 'docs/mentalhealth/mentalhealth',
            },
            {
              label: 'Self Improvement',
              to: 'docs/selfimprovement/psychology/',
            },
            {
              label: 'Spirituality',
              to: 'docs/spirituality/spirituality',
            },
            {
              label: 'Ayurveda',
              to: 'docs/ayurveda/ayurveda',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/3eWYKq5uEB',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute!',
              to: 'https://github.com/EsenDR/ywhsite',
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
            'https://github.com/EsenDR/ywhsite/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EsenDR/ywhsite/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
