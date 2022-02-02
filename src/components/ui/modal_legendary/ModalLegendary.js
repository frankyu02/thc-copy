import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { ModalLegendaryStyles } from "./ModalLegendary.styled"
import { MainButton } from "../../ui/main_button/MainButton"
import { OnEscape } from "../../../utils/onEscape"
import { OnClickOutside } from "../../../utils/onClickOutside"


export const ModalLegendary = ({ open, close }) => {
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
                        storyLegendaryTitle
                        storyLegendaryModalOpen
                        storyLegendaryModalText {
                          fieldGroupName
                          storyLegendaryModalTextItem
                        }
                        storyLegendaryModalImg1{
                            localFile {
                                childImageSharp {
                                    gatsbyImageData 
                                }
                            }
                            altText
                        }
                        storyLegendaryModalImg2{
                            localFile {
                                childImageSharp {
                                    gatsbyImageData 
                                }
                            }
                            altText
                        }
                    }
                }
            }
        }
    `)
  const storyLegendary = data?.wpPage?.home?.storyLegendary
  const ref = useRef()
  const Modal = () => <>
    {open && <OnEscape callback={close} />}
    {open && <OnClickOutside firstRef={ref} handler={close} />}
    <div ref={ref} className={"modal_content"}>
      <button className={"close"} onClick={close}>
        <StaticImage
          src="../../../images/close.svg"
          alt="close"
          placeholder="blurred"
          layout="fixed"
        />
      </button>
      <div className="legendary-modal_image">
        <GatsbyImage className="top_baner"
                     image={getImage(storyLegendary?.storyLegendaryModalImg1?.localFile?.childImageSharp?.gatsbyImageData)}
                     alt={storyLegendary?.storyLegendaryModalImg1?.altText || "banner"} />
        <GatsbyImage className="bottom_baner"
                     image={getImage(storyLegendary?.storyLegendaryModalImg2?.localFile?.childImageSharp?.gatsbyImageData)}
                     alt={storyLegendary?.storyLegendaryModalImg2?.altText || "banner"} />
      </div>
      <div className={"legendary-modal_context"}>
        <div className="legendary-modal_text">
          {storyLegendary?.storyLegendaryModalText?.map?.((item, key) => (
            <p key={key}>{item?.storyLegendaryModalTextItem}</p>
          ))}
        </div>
        <div><MainButton url={storyLegendary?.storyLegendaryButton?.url}
                         target={storyLegendary?.storyLegendaryButton?.target}>{storyLegendary?.storyLegendaryButton?.title}</MainButton>
        </div>
      </div>
    </div>
    <button className={"overlay"}>overlay</button>
  </>
  return (
    <>
      {open ? <ModalLegendaryStyles className={open ? "active" : ""}>
        <Modal />
      </ModalLegendaryStyles> : <div className={"loading"}><Modal /></div>
      }
    </>
  )
}
