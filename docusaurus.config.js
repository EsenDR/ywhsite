module.exports = {
  title: 'YWH Resources',
  tagline: '💔Your Worries Here❤',
  url: 'https://ywh.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EsenDR',
  projectName: 'ywhsite',
  themeConfig: {
    algolia: {
      apiKey: 'c4a5c59a4cb333512075f70587d31aa5',
      indexName: 'YWH',
      appId: '2RYK1I708E',
    },
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
              to: 'docs/',
            },
            {
              label: 'Mental Health',
              to: 'docs/mentalhealth',
            },
            {
              label: 'Self Improvement',
              to: 'docs/psychology',
            },
            {
              label: 'Spirituality',
              to: 'docs/spirituality',
            },
            {
              label: 'Ayurveda',
              to: 'docs/ayurveda',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Contribute!',
              href: 'https://github.com/EsenDR/ywhsite',
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
          editUrl:
            'https://github.com/EsenDR/ywhsite/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
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