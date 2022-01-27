import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"

export const MENU_LINK = "/menu"
export const ORDER_NOW = MENU_LINK
export const CreateRoutes = () => {

  const navDropdown = useStaticQuery(graphql`
query MyQuery($childItems: WpMenuItemToMenuItemConnectionFilterInput = {}, $image: WpMenuItem_ImageFilterInput = {}) {
  allWpMenuItem(
    filter: {menu: {node: {locations: {eq: MENU_HEADER}, menuItems: {nodes: {elemMatch: {childItems: {nodes: {elemMatch: {childItems: $childItems, image: $image}}}}}}}}}
  ) {
    nodes {
      label
      childItems {
        nodes {
          label
          image {
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          url
        }
      }
    }
  }
}


    `)

  return useMemo(() => {
    const FetchSubItems = (MenuField) => {
      const filtered = navDropdown?.allWpMenuItem?.nodes.filter((item) => item.label === MenuField)
      return filtered[0].childItems.nodes
    }
    return [
      {
        label: "Cannabis menu",
        link: MENU_LINK,
        items: FetchSubItems("CANNABIS MENU")
      },

      {
        label: "APPAREL",
        link: "/APPAREL"

      },

      {
        label: "Delivery",
        link: "/delivery"

      },
      {
        label: "Company",

        items: FetchSubItems("Company")
      },
      {
        label: "Media",

        items: FetchSubItems("Media")
      },
      {
        label: "CONTACT US",
        link: "pageLink"

      }
    ]

  }, [navDropdown])


}

