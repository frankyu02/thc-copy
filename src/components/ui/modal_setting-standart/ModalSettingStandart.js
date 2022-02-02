import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { ModalSettingSrandartStyles } from "./ModalSettingStandart.styled"
import { MainButton } from "../../ui/main_button/MainButton"
import { OnEscape } from "../../../utils/onEscape"
import { OnClickOutside } from "../../../utils/onClickOutside"

export const ModalSettingSrandart = ({ open, close }) => {
  const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                  news {
                    newsOpenModal
                    newsText {
                      newsTextParagraph
                    }
                    newsButton {
                      target
                      title
                      url
                    }
                    newsModalText {
                      fieldGroupName
                      newsModalTextParagraph
                    }
                    newsModalImg{
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
  const news = data?.wpPage?.home?.news
  const ref = useRef()
  const Html = () => <>
    {open && <OnEscape callback={close} />}
    {open && <OnClickOutside firstRef={ref} handler={close} />}
    <div ref={ref} className={"modal-content"}>
      <button className={"close"} onClick={close}>
        <StaticImage
          src="../../../images/close.svg"
          alt="close"
          placeholder="blurred"
          layout="fixed"
        />
      </button>
      <div className={" modal-context"}>
        <div className=" modal-text">
          <div className="left">
            {news?.newsModalText?.map?.((item, key) => (

              key < 4 && <p key={key}>{item?.newsModalTextParagraph}</p>
            ))}
          </div>
          <div className="right">
            {news?.newsModalText?.map?.((item, key) => (
              key > 3 && <p key={key}>{item?.newsModalTextParagraph}</p>
            ))}
            <div className=" modal-image">
              <GatsbyImage objectFit={"contain"}
                           image={getImage(news?.newsModalImg?.localFile?.childImageSharp?.gatsbyImageData)}
                           alt={news.newsModalImg.altText || "modal-img"} />
            </div>
          </div>

        </div>
        <MainButton url={news?.newsButton?.url}
                    target={news?.newsButton?.target}>{news?.newsButton?.title}</MainButton>
      </div>

    </div>
    <button className={"overlay"} onClick={close}>overlay</button>
  </>
  return (
    open ? <ModalSettingSrandartStyles className={open ? "active" : ""}>
      <Html />
    </ModalSettingSrandartStyles> : <div className={"loading"}><Html /></div>
  )
}
