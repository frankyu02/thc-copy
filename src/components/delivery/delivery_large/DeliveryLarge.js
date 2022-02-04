import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { DeliveryLargeStyled } from "./DeliveryLarge.styled"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import MainButton from "../../ui/main_button/MainButton"

export const DeliveryLarge = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo0MjE="}}) {
                nodes {
                    delivery {
                        deliveryDescription {
                            deliveryDescriptionBg {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData 
                                    }
                                }
                            }
                            deliveryDescriptionBgMobile {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData 
                                    }
                                }
                            }
                            deliveryDescriptionButton {
                                target
                                title
                                url
                            }
                        }
                    }
                }
            }
        }
    `)
  const delivery = data?.allWpPage?.nodes[0]?.delivery?.deliveryDescription
  const images = withArtDirection(getImage(delivery.deliveryDescriptionBgMobile?.localFile), [
    {
      media: "(min-width: 501px)",
      image: getImage(delivery.deliveryDescriptionBg?.localFile)
    }
  ])
  return (
    <DeliveryLargeStyled>
      <div className={"container"}>
        <div className={"delivery_large"}>
          <GatsbyImage className="delivery_bg"
                       image={getImage(images)}
                       alt={"banner"} />
        </div>
        <MainButton>{delivery?.deliveryDescriptionButton?.title}</MainButton>
      </div>
    </DeliveryLargeStyled>
  )
}
