import * as React from "react";
import { Link, graphql, useStaticQuery} from "gatsby";
import { InfoBannerStyled } from "./InfoBanner.styled";

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
    const promotion = data?.allWpPage?.nodes[0]?.delivery?.deliveryPromotion;

    return (
        <InfoBannerStyled>
            <div className="container">
                {promotion?.map?.((item, key) => (
                <div key={key} className={"promo-item"}>
                    <div className="promo-context">
                        <h3>{item?.deliveryPromotionTitle}</h3>
                        <ul>
                        {item?.deliveryPromotionList?.map?.((i, key) => (
                            <li key={key}>{i.deliveryPromotionListItem}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="promo-info">
                        <div className="promo-price">
                            <p>{item?.deliveryPromotionPrice}</p>
                            <h4>{item?.deliveryPromotionPriceText}</h4>
                        </div>
                        <Link to={item?.deliveryPromotionButton?.url || '#'} className="btn" target={item?.deliveryPromotionButton?.target}>{item?.deliveryPromotionButton?.title}</Link>
                    </div>
                </div>
                ))}
            </div>
        </InfoBannerStyled>
    );
}
