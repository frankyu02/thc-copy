import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MainButtonShop from "../../ui/main_button/MainButtonShop"
import { Swiper, SwiperSlide } from "swiper/react"
import swiperCss from "!raw-loader!swiper/css"

const Desktop = ({ card }) => {


  return (
    <>
      <style>
        {swiperCss}
      </style>
      <Swiper loop={true} spaceBetween={20} slidesPerView={4.2} className={"merch_cart_list"}>
        {card?.map((item, key) => (
          <SwiperSlide className={"card"} key={key}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Desktop