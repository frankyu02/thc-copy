require("dotenv").config({ path: ".env" })

const {
  HTTPBASICAUTH_USERNAME,
  HTTPBASICAUTH_PASSWORD,
  GATSBY_SOURCE,
  SITE_URL
} = process.env

module.exports = {
  siteMetadata: {
    title: `THC`,
    description: ``,
    author: `Blackhawk Digital`,
    siteUrl: SITE_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    //
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: false
    //   }
    // },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false,
        // minify: false
        disableVendorPrefixes: true
      }
    },

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: GATSBY_SOURCE,
        auth: {
          htaccess: {
            username: HTTPBASICAUTH_USERNAME,
            password: HTTPBASICAUTH_PASSWORD
          }
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [760, 1366, 1920],
          avifOptions: { quality: 75 }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon/android-icon-192x192.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Integral CF", "Integral CF Bold", "Integral CF Heavy", "MADE Outer Sans Light", "Neumatic Compressed Bold"],
          urls: ["/fonts/fonts.css"]
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}