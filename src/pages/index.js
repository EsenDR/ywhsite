import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Resources/Topics',
    imageUrl: 'img/YWHicon.png',
    description: (
      <>
        All the topics can be found <a href="https://www.ywhpdb.xyz/docs/">here</a> or on the first Resources page.
      </>
    ),
  },
  {
    title: 'Discord Server',
    imageUrl: 'img/ywhgif.gif',
    description: (
      <>
        If you found this website on its own, consider joining our <a href="https://discord.gg/3eWYKq5uEB">discord server</a>! Our community focuses on mental health and venting.
      </>
    ),
  },
  {
    title: 'Suggestions/Contribution.',
    imageUrl: 'img/YWHicon.png',
    description: (
      <>
        You can find information on how to leave suggestions or how to contribute <a href="https://www.ywhpdb.xyz/docs/#supporting-us">here</a>.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`💔Your Worries Here❤ ${siteConfig.title}`}
      description="YWH website for resources, mental health topics, etc.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;