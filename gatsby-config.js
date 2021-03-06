require("dotenv").config({ path: ".env" })

const {
  HTTPBASICAUTH_USERNAME,
  HTTPBASICAUTH_PASSWORD,
  GATSBY_SOURCE,
  SITE_URL
} = process.env

const apolloConfig = {
  uri: process.env.DUTCHIE_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.DUTCHIE_API_KEY}`
  }
}

module.exports = {
  siteMetadata: {
    title: `THC`,
    description: ``,
    author: `Blackhawk Digital`,
    siteUrl: SITE_URL
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9FS9N8DD4C", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   anonymize_ip: true,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-apollo`,
      options: apolloConfig
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
        serialize: ({ site, allSitePage }) => {
          console.log("[gatsby-plugin-sitemap DEBUG]: serialize ", allSitePage)
          let pages = [];
          allSitePage.edges.map(edge => {
            console.log("[gatsby-plugin-sitemap DEBUG]: serialize ", SITE_URL + edge.node.path)
            pages.push({
              url: SITE_URL + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            })
          })

          return pages;
        },
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-use-query-params",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-graphql-loader`,
    //
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: false
    //   }
    // },
    {
      resolve:'gatsby-source-graphql',
      options: {
          typeName: "DutchiePlus",
          fieldName: "dutchieplus",
          url: process.env.DUTCHIE_API_URL,
          headers: {
              Authorization: process.env.DUTCHIE_API_KEY
          }
      }
    },
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
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [780, 1920]
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