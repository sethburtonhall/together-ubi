const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },

  siteMetadata: {
    title: `Together UBI`,
    description: `Crisis brings out our human nature. Generosity, compassion and care. Donate to help people in need during COVID19, or sign up for financial assistance due to COVID19.`,
    siteUrl: `https://together-ubi.netlify.com//`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `34ecf76bb301fb616e6a8cab75d254`,
        preview: false,
        disableLiveReload: false,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Together UBI`,
        short_name: `Together UBI`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
