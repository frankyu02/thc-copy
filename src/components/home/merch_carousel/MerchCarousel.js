import React, { Suspense, useCallback, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MerchCarouselStyled } from "./MerchCarousel.styled"
import MainButtonShop from "../../ui/main_button/MainButtonShop"
import { __BREAKPOINTS } from "../../../styles/utils/variables"
import { Fade } from "react-awesome-reveal"

import Mobile from "./mobile"

export const MerchCarouselLazy = ({ card }) => {
  const Desktop = React.lazy(() => import("./desktop"))
  const [isMobile, setIsMobile] = useState(true)
  const resize = useCallback(() => {
    if (window?.innerWidth >= __BREAKPOINTS.sm) {
      setIsMobile(false)
    }
    if (window?.innerWidth < __BREAKPOINTS.sm) {
      setIsMobile(true)
    }
  }, [])
  useEffect(() => {

    if (window?.innerWidth >= __BREAKPOINTS.sm) {
      setIsMobile(false)
    }
    window?.addEventListener("resize", resize)
    return (() => {
      window?.removeEventListener("resize", resize)
    })
  }, [])
  return (
    <>
      {isMobile ? <Mobile card={card} /> :
        <Suspense fallback={<div>loading...</div>}> <Desktop card={card} /> </Suspense>}
    </>

  )

}


export const MerchCarousel = ({ lazyLoading }) => {
  return (
    lazyLoading ? <MerchCarouselStyled> <Html /> </MerchCarouselStyled> :
      <section className="loading"><Html /></section>
  )
}
const Html = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo3"}}) {
                edges {
                    node {
                        home {
                            merchCarousel {
                                merchCarouselTitle
                                merchCarouselSubTitle
                                merchCarouselButton {
                                    target
                                    title
                                    url
                                }
                                merchCarouselCard {
                                    merchCarouselCardButton {
                                        target
                                        title
                                        url
                                    }
                                    merchCarouselCardPrice
                                    merchCarouselCardTitle
                                    merchCarouselCardImg {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData 
                                            }
                                        }
                                    }
                                    merchCarouselCardHoverimg {
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
        }

    `)
  const merchCarousel = data?.allWpPage?.edges[0]?.node?.home?.merchCarousel
  const card = data?.allWpPage?.edges[0]?.node?.home?.merchCarousel?.merchCarouselCard
  return (
    <>
      <div className={"merch_header"}>
        <div className={"container"}>
        <Fade direction="left" cascade damping={0.25}>
          <h2>{merchCarousel?.merchCarouselTitle}</h2>
          <h3>{merchCarousel?.merchCarouselSubTitle}</h3>
        </Fade>
        </div>
      </div>
      <div className={"merch_parent"}>
        <div className={"container"}>
          <MerchCarouselLazy card={card} />
          <div className={"to_shop"}>
            <MainButtonShop url={merchCarousel?.merchCarouselButton?.url}
                            target={merchCarousel?.merchCarouselButton?.title}>{merchCarousel?.merchCarouselButton?.title}</MainButtonShop>
          </div>
        </div>
      </div>
    </ >
  )
}
