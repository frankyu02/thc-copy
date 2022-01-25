import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"

export const MENU_LINK = "/menu"
export const CreateRoutes = () => useMemo(() => {
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
        }
      }
    }
  }
}

    `)
  const FetchSubItems = (MenuField) => {
    const filtered = navDropdown?.allWpMenuItem?.nodes.filter((item) => item.label == MenuField)
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
      link: "pageLink"

    },

    {
      label: "Delivery",
      link: "pageLink"

    },
    {
      label: "Company",
      link: "pageLink",
      items: FetchSubItems("Company")
    },
    {
      label: "Media",
      link: "pageLink",
      items: FetchSubItems("Media")
    },
    {
      label: "CONTACT US",
      link: "pageLink"

    }
  ]

}, [])

