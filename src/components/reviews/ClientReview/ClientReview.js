import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import swiperCss from "!raw-loader!swiper/css"
import swiperNavCss from "!raw-loader!swiper/css/navigation"
import { ClientReviewStyle, Reviews, SwiperContainer } from "./ReviewStyles"
import { Fade } from "react-awesome-reveal" 

SwiperCore.use([Navigation])

export const ClientReview = () => {

  const data = useStaticQuery(graphql`
        query{
            wpPage( title: {eq: "Reviews"}) {
                reviews {
                clientReviews {
                    clientReviewsCards {
                    clientReviewsCardLocation
                    clientReviewsCardName
                    clientReviewsCardText
                    }
                    clientReviewsSubTitle
                    clientReviewsTitle
                    }
                }
             }
        }
    `)
  const reviewdata = data?.wpPage?.reviews?.clientReviews
  return (
    <ClientReviewStyle>

      <style>{swiperCss} {swiperNavCss}</style>

      <div className="reviewContainer">
        <div className="title">
          <Fade direction="left">
          <h2>{reviewdata.clientReviewsTitle}</h2>
          </Fade>
        </div>
        <div className="subtitle">
        <Fade direction="left" delay={180}>
          <h3>{reviewdata.clientReviewsSubTitle}</h3>
          </Fade>
        </div>
        <SwiperContainer>
          <Swiper
            className="swiper-review"
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              "992": {
                "slidesPerView": 2.3
              }
            }}
          >
            {
              reviewdata?.clientReviewsCards.length > 0 ?
                (reviewdata?.clientReviewsCards.map((review, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      virtualIndex={index}>
                      <Reviews>
                        {/*<div className="stars">*/}
                        {/*  <StaticImage*/}
                        {/*    className="star"*/}
                        {/*    src="../../../images/vector.png"*/}
                        {/*    alt="purple Star"*/}
                        {/*  />*/}
                        {/*  <StaticImage*/}
                        {/*    className="star"*/}
                        {/*    src="../../../images/vector.png"*/}
                        {/*    alt="purple Star"*/}
                        {/*  />*/}
                        {/*  <StaticImage*/}
                        {/*    className="star"*/}
                        {/*    src="../../../images/vector.png"*/}
                        {/*    alt="purple Star"*/}
                        {/*  />*/}
                        {/*  <StaticImage*/}
                        {/*    className="star"*/}
                        {/*    src="../../../images/vector.png"*/}
                        {/*    alt="purple Star"*/}
                        {/*  />*/}
                        {/*  <StaticImage*/}
                        {/*    className="star"*/}
                        {/*    src="../../../images/vector.png"*/}
                        {/*    alt="purple Star"*/}
                        {/*  />*/}
                        {/*</div>*/}
                        <div className="review">
                          <p>{review.clientReviewsCardText}</p>
                        </div>
                        <div className="name">
                          <p> {review.clientReviewsCardName} </p>
                        </div>
                        <div className="location">
                          <p>{review.clientReviewsCardLocation}</p>
                        </div>
                      </Reviews>
                    </SwiperSlide>
                  )
                }))
                :
                <div>loading cards...</div>
            }
          </Swiper>
        </SwiperContainer>
      </div>
    </ClientReviewStyle>

  )
}