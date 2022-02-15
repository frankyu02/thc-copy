import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { InfoBannerStyled } from "./InfoBanner.styled"
import { Fade } from "react-awesome-reveal"

export const InfoBanner = () => {
  const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo0MjE="}}) {
                nodes {
                    delivery {
                        deliveryPromotion {
                            deliveryPromotionPrice
                            deliveryPromotionPriceText
                            deliveryPromotionTitle
                            deliveryPromotionList {
                                deliveryPromotionListItem
                            }
                            deliveryPromotionButton {
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
  const promotion = data?.allWpPage?.nodes[0]?.delivery?.deliveryPromotion

  return (
    <InfoBannerStyled>
      <div className="container">
        {promotion?.map?.((item, key) => (
          <div key={key} className={"promo-item"}>
            <div className="promo-context">
              <Fade direction="left">
              <h3>{item?.deliveryPromotionTitle}</h3>
              </Fade>
              <ul>
                {item?.deliveryPromotionList?.map?.((i, key) => (
                  <Fade direction="left">
                  <li key={key}>{i.deliveryPromotionListItem}</li>
                  </Fade>
                ))}
              </ul>
            </div>
            <div className="promo-info">
              <div className="promo-price">
                <p>{item?.deliveryPromotionPrice}</p>
                <h4 dangerouslySetInnerHTML={{ __html: item?.deliveryPromotionPriceText }} />
              </div>
              <Link to={item?.deliveryPromotionButton?.url || "#"} className="btn"
                    target={item?.deliveryPromotionButton?.target}>{item?.deliveryPromotionButton?.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </InfoBannerStyled>
  )
}
