import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BrandsStyled } from "./Brands.styled"
import { MainButton } from "../../ui/main_button/MainButton"
import { Slide, Fade } from "react-awesome-reveal"

export const Brands = ({ lazyLoading }) => {
  const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
              home {
                brands {
                  brandsButton {
                    title
                    target
                    url
                  }
                  brandsLogo {
                    brandsLogoItem {
                      altText
                      localFile {
                        childrenImageSharp {
                          gatsbyImageData 
                        }
                      }
                      link
                    }
                  }
                  brandsSubTitle
                  brandsTitle
                }
              }
            }
          }
    `)
  const brands = data?.wpPage?.home?.brands
  const Html = () => <div className="container">
    <div className={"brand-section"}>
      <div className={"brand-title"}>
        <Slide direction="left">
        <h2>{brands?.brandsTitle}</h2>
        <h3>{brands?.brandsSubTitle}</h3>
        </Slide>
      </div>
      <div className={"brand-grid"}>
        {brands?.brandsLogo?.map?.((item, key) => (
          <div key={key} className={"brand-item"}>
            <Fade><div>
            <GatsbyImage image={getImage(item?.brandsLogoItem?.localFile?.childrenImageSharp[0]?.gatsbyImageData)}
                         alt={"brands"} />
            </div></Fade>
          </div>
        ))}
      </div>
      <Fade direction="down"><div>
      <MainButton url={brands?.brandsButton?.url}
                  target={brands?.brandsButton?.target}>{brands?.brandsButton?.title}</MainButton>
      </div></Fade>
    </div>
  </div>

  return (
    lazyLoading ? <BrandsStyled>
      <Html />
    </BrandsStyled> : <section className={"loading"}><Html /></section>
  )
}

export default Brands