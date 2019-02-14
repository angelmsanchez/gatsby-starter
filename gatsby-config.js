module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-favicon`,
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     baseUrl: 'http://escuelainfantilsaposapito.es/',
    //     protocol: 'http',
    //     hostingWPCOM: true,
    //     useACF: false,
    //     auth: {
    //       wpcom_app_clientSecret: '',
    //       wpcom_app_clientId: '',
    //       wpcom_user: '',
    //       wpcom_pass: '',
    //     },
    //     verboseOutput: false,
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: 'http://escuelainfantilsaposapito.es/',
    //       replacementUrl: 'http://escuelainfantilsaposapito.es/',
    //     },
    //   },
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}