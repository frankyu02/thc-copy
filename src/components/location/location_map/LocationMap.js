import React from "react"
import { LocationMapStyle } from "./LocationMap.styled"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MainButton from "../../ui/main_button/MainButton"
import Reveal, { Fade } from "react-awesome-reveal"
import { keyframes } from "@emotion/react";

export const LocationMap = () => {
  const data = useStaticQuery(graphql`
        query {
       allWpPage(filter: {id: {eq: "cG9zdDo2NDM="}}) {
    nodes {
      location {
        locationInfo {
          locationInfoText
          locationInfoContact {
            locationInfoContactItem
          }
          locationInfoButtom {
            title
            target
            url
          }
          locationInfoMap {
            locationInfoMapImg {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            locationInfoMapLink {
              target
              title
              url
            }
          }
        }
      }
    }
  }
        }
    `)
  const mapInfo = data?.allWpPage?.nodes[0]?.location?.locationInfo

  const mapImg = data?.allWpPage?.nodes[0]?.location?.locationInfo?.locationInfoMap?.locationInfoMapImg.localFile
  const mapLink = data?.allWpPage?.nodes[0]?.location?.locationInfo?.locationInfoMap?.locationInfoMapLink

  const animeStyles = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;


  return (
    <LocationMapStyle>
      <div className={"container"}>
        <div className={"location_map"}>
          <div className={"map_block"}>
            <a title={mapLink?.title} rel="noreferrer" target={mapLink?.target}
               href={mapLink?.url}> <span style={{ display: "none" }}>{mapLink?.title} </span> <GatsbyImage
              image={getImage(mapImg)} alt="map" />

            </a>
          </div>
          <div className={"map_info"}>
            <Reveal keyframes={animeStyles}>
            <h4>
              {mapInfo?.locationInfoContact?.map?.((item, key) => (
                <span className={"map_heading_item"} dangerouslySetInnerHTML={{ __html: item?.locationInfoContactItem }}
                      key={key} />
              ))}</h4>
              </Reveal>
            <p>{mapInfo?.locationInfoText}</p>
            <Fade direction="up"><div>
            <MainButton linkType={"a"} url={mapInfo?.locationInfoButtom?.url}
                        target={mapInfo?.locationInfoButtom?.target}>{mapInfo?.locationInfoButtom?.title}</MainButton>
                        </div></Fade>
          </div>
        </div>
      </div>
    </LocationMapStyle>
  )
}