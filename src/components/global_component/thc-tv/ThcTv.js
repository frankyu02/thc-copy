import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ThcTvStyled } from "./ThcTv.styled"
import { UniversalLink } from "../../../utils/universalLink"
import { Fade } from "react-awesome-reveal"

export const ThcTv = ({ lazyLoading }) => {

  return (
    lazyLoading ? <ThcTvStyled>
      <Html />
    </ThcTvStyled> : <section className={"loading "}><Html /></section>
  )

}
const Html = () => {
  const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
                home {
                    thcTv {
                        thcTvText
                        thcTvTitle
                        thcTvImg {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData 
                                }
                            }
                        }
                        thcTvButton {
                            target
                            title
                            url
                        }
                    }
                }
            }
        }
    `)
  const thcTv = data?.wpPage?.home?.thcTv
  return (
    <ThcTvStyled>
      <div className={"thctv-block"}>
        <div className={"container"}>
          <div className={"thc-tv-text"}>
            <Fade direction="left">
            <h2>THC TV</h2>
            </Fade>
            <p>THC TV offers YouTube viewers an inside look into the most legendary cannabis store in Canada. We'll
              explore everything from product ordering to facility tours to events and more. Follow Snack Bundles,
              Campaign Colin, Nick The Quick and team through their daily adventures.</p>
            <p>The channel currently has four shows: THC TV, Dank TV, Certified Dank and CMPND Vlogs. </p>
            <Fade><div>
            <UniversalLink to={thcTv?.thcTvButton?.url || "#"} className="btn btn--white"
                           target={thcTv?.thcTvButton?.target}>{thcTv?.thcTvButton?.title}
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16V2.22222V0L13 8L0 16Z" fill="black" />
              </svg>
            </UniversalLink>
            </div></Fade>
          </div>
          <div className={"thc-tv-img"}>
            <Fade direction="down"><div>
            <GatsbyImage image={getImage(thcTv?.thcTvImg?.localFile?.childImageSharp?.gatsbyImageData)}
                         alt={thcTv?.thcTvImg?.altText || "banner"} />
            </div></Fade>
          </div>
        </div>
      </div>
    </ThcTvStyled>
  )
}
export default ThcTv
