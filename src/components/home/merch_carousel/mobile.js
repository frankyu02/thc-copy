import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MainButtonShop from "../../ui/main_button/MainButtonShop"


const Mobile = ({ card }) => {
  return (
    <>
      <div className={"merch_cart_list mobile"}>
        {card?.map((item, key) => (
          key < 6 ?
            <div className={"card"} key={key}>
              <div className={"cart_image_wrapper"}>
                <GatsbyImage className="cart_img"
                             image={getImage(item?.merchCarouselCardImg?.localFile)}
                             alt={"banner"} />
                <GatsbyImage className="cart_img_hover"
                             image={item.merchCarouselCardHoverimg !== null ? getImage(item?.merchCarouselCardHoverimg?.localFile) : getImage(item?.merchCarouselCardImg?.localFile)}
                             alt={"banner"} />
                <MainButtonShop url={item?.merchCarouselCardButton?.url}
                                target={item?.merchCarouselCardButton?.target}>{item?.merchCarouselCardButton?.title}</MainButtonShop>
              </div>
              <div className={"cart_description"}>
                <h4>{item?.merchCarouselCardTitle}</h4>
                <strong>{item?.merchCarouselCardPrice}</strong>
              </div>
            </div> : null
        ))}
      </div>
    </>

  )
}

export default Mobile