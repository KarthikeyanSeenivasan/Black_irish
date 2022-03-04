module.exports = {
  siteMetadata: {
    title: `Black Irish`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-use-query-params",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Black irish`,
        background_color: `#663399`,
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon: `./src/images/logo.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJYb0FsVmVXZAFU5YW5ZAa0tuekFSeGV4RFhielpiMlpjUGY3Y2h3Mk9wUkhUVDBPelo2N1JvLWFCRWcyZA2xITW0wOHQ1ZAjlDSTY5bzU2OGxUMVozWUVfWEg3clhEMUlBSFlTaUZAFc21MdDZAaQ0VvMwZDZD",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://goblackirish.us5.list-manage.com/subscribe/post?u=32579cef70b89cbd7e4410032&amp;id=a3e5e90513",
        timeout: 3500,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
