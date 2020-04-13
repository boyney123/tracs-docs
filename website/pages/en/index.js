/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className={`button ${className}`} href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <div className="main-hero">
    <h1 className="projectTitle">Measure Software Delivery Performance</h1>
    <p>
      <strong>tracs</strong> is a free and open source tool to track metrics to help you become a high performing team.
    </p>

    <div className="projectImage">
      <img src={imgUrl('graph.svg')} />
    </div>
  </div>
);

const PromoSection = props => (
  <div className={`section promoSection ${props.className}`}>
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />

          <div className="badges">
            <a href="https://travis-ci.org/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/travis/boyney123/mockit/master.svg" />
            </a>
            <a href="https://codecov.io/gh/boyney123/mockit" target="_blank">
              <img src="https://codecov.io/gh/boyney123/mockit/branch/master/graph/badge.svg?token=AoXW3EFgMP" />
            </a>

            <a href="https://github.com/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
            </a>

            <a href="https://github.com/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
            </a>

            <a href="https://github.com/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/github/stars/boyney123/mockit.svg?style=social" />
            </a>
          </div>

          <PromoSection>
            <Button href="/docs/getting-started/installation" className="solid">
              Getting Started
            </Button>
            <Button href="/docs/using-tracs/motivation">Read more</Button>
            {/* <Button href="docs/examples/example-list">View Examples</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Start measuring Deployment frequency, Incidents, Lead time for changes, Time to restore service and more...',
        image: 'https://image.flaticon.com/icons/svg/2738/2738624.svg',
        imageAlign: 'top',
        title: 'Measure metrics that matter'
      },
      {
        content: 'Integrate with your own services (GitHub, Jira, GitLab, etc.) and capture the right data.',
        image: 'https://image.flaticon.com/icons/svg/627/627558.svg',
        imageAlign: 'top',
        title: 'API Driven'
      },
      {
        content: 'Built with Docker. Run one command to get up and running straight away.',
        image: 'https://image.flaticon.com/icons/svg/919/919853.svg',
        imageAlign: 'top',
        title: 'Setup in Minutes'
      }
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div className="productShowcaseSection" style={{ textAlign: 'center' }}>
    <h2>Out the box dashboards</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How'
      }
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out'
      }
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description'
      }
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <div className="feature-dark">
            <Features />
          </div>
          <div className="features">
            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>Collect core metrics.</h3>
                  <p>Focus on accelerating the speed and confidence of feedback between customers and developer.</p>
                  <p>
                    Acceleration comes in the form of faster lead time for changes to production, increased deployment frequency to production, faster time to restore service to production, and
                    reduction in the change failure rate to production.
                  </p>
                  <p>You can use this tool to start capturing these metrics quickly.</p>

                  <a class="learnmore" href="/docs/using-tracs/motivation">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img width="75%" src={imgUrl('collecting.svg')} />
                </div>
              </div>
            </div>
            <div className="feature-dark feature">
              <div class="content row">
                <div class="col center">
                  {/* <img src={imgUrl('/docs/mockit/routes-example.png')} /> */}
                  <img width="75%" src={imgUrl('integration.svg')} />
                </div>
                <div class="col">
                  <h3>Integrate with your own platforms</h3>
                  <p>Use our API to integrate with your own systems.</p>
                  <p>Pick and choose what you want. If you already have a Grafana Dashboard you can easily integrate with us.</p>

                  <a class="learnmore" href="/docs/getting-started/installation">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>Inspired by research</h3>
                  <p>
                    Tracs is an open source project inspired by data and research collected from book:{' '}
                    <strong>Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations</strong>.{' '}
                  </p>

                  <p>The book presents both the findings and the science behind high performing teams, making the information accessible for readers to apply. </p>
                  <p>This project was built to help people apply those findings and measure the key metrics within their own organizations. </p>

                  <a class="learnmore" href="/docs/getting-started/global-settings#chaos-monkey">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img src={imgUrl('book.svg')} />
                </div>
              </div>
            </div>
            <div className="feature-dark feature">
              <div class="content row">
                <div class="col center">
                  <img width="60%" src={imgUrl('clock.svg')} />
                  {/* <img width="50%" src="https://image.flaticon.com/icons/svg/919/919853.svg" /> */}
                </div>
                <div class="col">
                  <h3>Get setup within minutes...</h3>

                  <p>Docker allows you to setup and run Tracs within minutes to start exploring the platform.</p>
                  <p>You can host Tracs on your own infustructure and start collecting your software delivery performance metrics.</p>

                  <a class="learnmore" href="/docs/using-tracs/how-it-works">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>Tracs is open source</h3>
                  <p>Tracs was built to help software teams to measure metrics that can help them perform.</p>
                  <p>If you would like to contribute feel free to checkout the repository.</p>

                  <a class="learnmore" href="/docs/contributing/contributing">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img width="75%" src={imgUrl('code.svg')} />
                  {/* <img width="50%" src="https://image.flaticon.com/icons/svg/174/174249.svg" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
