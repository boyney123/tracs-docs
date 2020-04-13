/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
];

const siteConfig = {
  title: 'tracs', // Title for your website.
  tagline: 'An open source tool to mock endpoints',
  url: 'https://tracs.netlify.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'tracs',
  organizationName: 'boyney123',
  editUrl: 'https://github.com/boyney123/tracs-docs/tree/master/docs/',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'using-tracs/motivation', label: 'Introduction' },
    { doc: 'getting-started/installation', label: 'Getting Started' },
    { doc: 'using-tracs/key-metrics', label: 'Metrics' },
    // { blog: false, label: 'Blog' },
    { href: 'https://github.com/boyney123/tracs', label: 'GitHub' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  // headerIcon: "img/garie.png",
  // footerIcon: "img/docusaurus.svg",
  // favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: '#3d7bd9',
    secondaryColor: '#6f9bf2',
    textColor: '#000000'
  },

  twitter: 'true',
  twitterUsername: 'boyney123',

  scrollToTop: true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: `Made by <a>@boyney123</a>`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  usePrism: ['jsx'],
  highlight: {
    theme: 'atom-one-dark'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/boyney123/tracs',

  gaTrackingId: 'UA-126459538-3'
};

module.exports = siteConfig;
