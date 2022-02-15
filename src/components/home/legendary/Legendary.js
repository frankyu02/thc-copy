import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MainButton } from "../../ui/main_button/MainButton"
import { ModalLegendary } from "../../ui/modal_legendary/ModalLegendary"
import { LegendaryStyles } from "./LegendaryStyles"
import { Fade } from "react-awesome-reveal"

export const Legendary = ({ lazyLoading }) => {

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
                                    gatsbyImageData(
                                    quality:60   
                                    )
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
                                    gatsbyImageData(quality:60)
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

  const Html = () => {
    return (
      <>
        <div className={"container"}>
          <div className={"main_legendary"}>
            <Fade duration={1800}>
            <div>
            <div className="legendary_image">
              <GatsbyImage className="legendary_baner" objectFit={"cover"}
                           image={getImage(storyLegendary?.storyLegendaryMainImg?.localFile?.childImageSharp?.gatsbyImageData)}
                           alt={storyLegendary.storyLegendaryMainImg.altText || "banner"} />
            </div>
            </div>
            </Fade>
            <div className={"legendary_text"}>
              <Fade direction="down"><div><h2>{storyLegendary?.storyLegendaryTitle}</h2></div></Fade>
              {storyLegendary?.storyLegendaryMainText?.map?.((item, key) => (
                <p key={key}>{item?.storyLegendaryMainTextItem}</p>
              ))}
              <button onClick={() => setModal(true)}
                      className="read_more">{storyLegendary?.storyLegendaryModalOpen}</button>
              <Fade direction="up">
              <div><MainButton url={storyLegendary?.storyLegendaryButton?.url}
                               target={storyLegendary?.storyLegendaryButton?.target}>{storyLegendary?.storyLegendaryButton?.title}</MainButton>
              </div></Fade> 
            </div>
          </div>
          <ModalLegendary open={modal} close={() => setModal(false)} />
          <div className={"legendary_parent"}>
            {cardsJoin?.map?.((item, key) => (
              <div key={key} className="legendary_item">
                <div className="overlay"></div>
                <Fade><div><GatsbyImage layout={"constrained"} className="image_bg"
                             image={getImage(item?.cardsJoinBgImg?.localFile?.childrenImageSharp[0]?.gatsbyImageData)}
                             alt={"banner"} /></div></Fade>
                <div className="content_parent">
                  <Fade direction="down"><div><h3>{item?.cardsJoinTitle}</h3></div></Fade>
                  <p>{item?.cardsJoinSubTitle}</p>
                  <Fade direction="up"><div>
                  <MainButton url={item?.cardsJoinButton?.url}
                              target={item?.cardsJoinButton?.target}>{item?.cardsJoinButton?.title}</MainButton>
                              </div></Fade>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
  return (
    lazyLoading ? <LegendaryStyles> <Html /> </LegendaryStyles> : <section className={"loading"}>
      <Html />
    </section>
  )
}