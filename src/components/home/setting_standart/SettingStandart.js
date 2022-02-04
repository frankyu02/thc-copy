import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SettingStyle } from "./SettingStyle"
import { MainButton } from "../../ui/main_button/MainButton"
import { ModalSettingSrandart } from "../../ui/modal_setting-standart/ModalSettingStandart"
import { useNoScroll } from "../../../hooks/useNoScroll"

export const SettingStandart = ({ lazyLoading }) => {
  const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    news {
                        newsOpenModal
                        newsText {
                            newsTextParagraph
                        }
                        newsTitle
                        newsButton {
                            target
                            title
                            url
                        }
                        newsImg {
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

    `)
  const news = data?.wpPage?.home?.news
  const [modal, setModal] = useState(false)
  useNoScroll(modal)
  const Html = () => <div className="container">
    <div className="setting_standart">
      <div className="settings_image">
        <GatsbyImage image={getImage(news?.newsImg?.localFile?.childImageSharp?.gatsbyImageData)} alt={"banner"} />
      </div>
      <div className="setting_text">
        <h3>{news?.newsTitle}</h3>
        {news?.newsText?.map?.((item, key) => (
          <p key={key}>{item?.newsTextParagraph}</p>
        ))}
        <button aria-label={"open modal"} onClick={() => setModal(true)}
                className="read_more">{news?.newsOpenModal}</button>
        <MainButton url={news?.newsButton?.url}
                    target={news?.newsButton?.target}>{news?.newsButton?.title}</MainButton>
      </div>
    </div>
    <ModalSettingSrandart open={modal} close={() => setModal(false)} />
  </div>
  return (
    lazyLoading ? <SettingStyle>
      <Html />
    </SettingStyle> : <section className={"loading"}><Html /></section>
  )
}