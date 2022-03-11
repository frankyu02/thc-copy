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
    {
      resolve: `gatsby-plugin-apollo`,
      options: apolloConfig
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => SITE_URL,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        excludes: ["/products"],
        serialize: ({ path, modifiedGmt }) => {
          console.log("[SITEMAP DEBUG]",{
            url: path,
            lastmod: modifiedGmt,
          })
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
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