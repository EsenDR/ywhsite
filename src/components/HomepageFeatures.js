import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Resources/Topics',
    Svg: require('../../static/img/YWHicon.svg').default,
    description: (
      <>
        All the topics can be found <a href="https://www.ywhpdb.xyz/docs/">here</a> or on the first Resources page.
      </>
    ),
  },
  {
    title: 'Discord Server',
    Svg: require('../../static/img/YWHicon.svg').default,
    description: (
      <>
        If you found this website on its own, consider joining our <a href="https://discord.gg/3eWYKq5uEB">discord server</a>! Our community focuses on mental health and venting.
      </>
    ),
  },
  {
    title: 'Suggestions/Contribution',
    Svg: require('../../static/img/YWHicon.svg').default,
    description: (
      <>
        You can find information on how to leave suggestions or how to contribute <a href="https://www.ywhpdb.xyz/docs/#supporting-us">here</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
