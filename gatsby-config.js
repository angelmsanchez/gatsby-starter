module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-favicon`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'en',
        useLangKeyLayout: true
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
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
  ],
}