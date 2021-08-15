module.exports = {
  siteMetadata: {
    title: `tossy-site`,
    description: `This is tossy-site.`,
    author: `Toshiki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/contents/news`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-emotion`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,


// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.dev/offline
// `gatsby-plugin-offline`,
  ]
}
