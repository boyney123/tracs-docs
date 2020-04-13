/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  imgUrl(img) {
    const siteConfig = require(`${process.cwd()}/siteConfig.js`);
    return `${siteConfig.baseUrl}img/${img}`;
  }
  
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="66" height="58" />}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("using-tracs/motivation.html", this.props.language)}>Motivation</a>
            <a href={this.docUrl("getting-started/installation.html", this.props.language)}>Getting Started</a>
          </div>
          <div>
            <h5>Contributing</h5>
            <a href={this.docUrl("contributing/contributing.html", this.props.language)}>Contributing</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/boyney123/mockit">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="copyright">
          Made by{" "}
          <a href="https://twitter.com/boyney123" target="_blank">
            {" "}
            @boyney123{" "}
          </a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
