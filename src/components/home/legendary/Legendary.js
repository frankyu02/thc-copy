import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LegendaryStyles } from "./LegendaryStyles"
import { MainButton } from "../../ui/main_button/MainButton"
import { ModalLegendary } from "../../ui/modal_legendary/ModalLegendary"
import { useNoScroll } from "../../../hooks/useNoScroll"

export const Legendary = () => {
  const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    storyLegendary {
                        storyLegendaryButton {
                            target
                            title
                            url
                        }
                        storyLegendaryText
                        storyLegendaryMainText {
                          fieldGroupName
                          storyLegendaryMainTextItem
                        }
                        storyLegendaryTitle
                        storyLegendaryModalOpen
                        storyLegendaryMainImg {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(quality: 100)
                                }
                            }
                            altText
                        }
                    }
                    cardsJoin {
                        cardsJoinButton {
                            target
                            title
                            url
                        }
                        cardsJoinSubTitle
                        cardsJoinTitle
                        cardsJoinBgImg {
                            localFile {
                                childrenImageSharp {
                                    gatsbyImageData(quality: 100)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
  const storyLegendary = data?.wpPage?.home?.storyLegendary
  const cardsJoin = data?.wpPage?.home?.cardsJoin
  const [modal, setModal] = useState(false)
  useNoScroll(modal)
  return (
    <LegendaryStyles>
      <div className={"container"}>
        <div className={"main_legendary"}>
          <div className="legendary_image">
            <GatsbyImage className="legendary_baner"
                         image={getImage(storyLegendary?.storyLegendaryMainImg?.localFile?.childImageSharp?.gatsbyImageData)}
                         alt={storyLegendary.storyLegendaryMainImg.altText || "banner"} />
          </div>
          <div className={"legendary_text"}>
            <h2>{storyLegendary?.storyLegendaryTitle}</h2>
            {storyLegendary?.storyLegendaryMainText?.map?.((item, key) => (
              <p key={key}>{item?.storyLegendaryMainTextItem}</p>
            ))}
            <button onClick={() => setModal(true)}
                    className="read_more">{storyLegendary?.storyLegendaryModalOpen}</button>
            <div><MainButton url={storyLegendary?.storyLegendaryButton?.url}
                             target={storyLegendary?.storyLegendaryButton?.target}>{storyLegendary?.storyLegendaryButton?.title}</MainButton>
            </div>
          </div>
        </div>
        <ModalLegendary open={modal} close={() => setModal(false)} />
        <div className={"legendary_parent"}>
          {cardsJoin?.map?.((item, key) => (
            <div key={key} className="legendary_item">
              <div className="overlay"></div>
              <GatsbyImage layout={"constrained"} className="image_bg"
                           image={getImage(item?.cardsJoinBgImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)}
                           alt={"banner"} />
              <div className="content_parent">
                <h3>{item?.cardsJoinTitle}</h3>
                <p>{item?.cardsJoinSubTitle}</p>
                <MainButton url={item?.cardsJoinButton?.url}
                            target={item?.cardsJoinButton?.target}>{item?.cardsJoinButton?.title}</MainButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LegendaryStyles>
  )
}