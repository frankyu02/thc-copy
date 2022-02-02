import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MapRegionsStyled } from "./MapRegions.styled"

export const MapRegions = () => {
  const data = useStaticQuery(graphql`
        query {
          allWpPage(filter: {id: {eq: "cG9zdDo0MjE="}}) {
            nodes {
              delivery {
                deliveryLocation {
                  deliveryLocationTitle
                  deliveryLocationText
                  deliveryLocationSubTitle
                  deliveryLocationButton {
                    url
                    title
                    target
                  }
                  deliveryLocationMap {
                    deliveryLocationMapLink {
                      url
                      title
                      target
                    }
                    deliveryLocationMapImg{
                      localFile {
                        childrenImageSharp {
                            gatsbyImageData 
                        }
                      }
                    }
                  }
                  deliveryLocationList {
                    deliveryLocationListItem
                  }
                }
              }
            }
          }
        }
    `)
  const title = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationTitle
  const subtitle = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationSubTitle
  const mapimg = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationMap?.deliveryLocationMapImg
  const maplink = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationMap?.deliveryLocationMapLink
  const text = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationText
  const list = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationList
  const button = data?.allWpPage?.nodes[0]?.delivery?.deliveryLocation?.deliveryLocationButton


  return (
    <MapRegionsStyled>
      <div className="container">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="map">
          <div className="map-img">
            <Link to={maplink?.url || "#"} target={maplink?.target}>
              <GatsbyImage image={getImage(mapimg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)}
                           alt={"category"} />
            </Link>
          </div>
          <div className="map-content">
            <p>{text}</p>
            <ul>
              {list?.map?.((item, key) => (
                <li key={key}>{item?.deliveryLocationListItem}</li>
              ))}
            </ul>
            <Link to={button?.url || "#"} className="btn" target={button?.target}>{button?.title}</Link>
          </div>
        </div>
      </div>
    </MapRegionsStyled>
  )
}
