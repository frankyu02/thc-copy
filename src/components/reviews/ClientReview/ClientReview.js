import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { ClientReviewStyle, Reviews, SwiperContainer } from "./ReviewStyles"

SwiperCore.use([Navigation])

export default function ClientReview() {

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
  // const val = reviewdata.clientReviewsCards.length
  return (
    <ClientReviewStyle>
      <div className="reviewContainer">
        <div className="title">
          <h2>{reviewdata.clientReviewsTitle}</h2>
        </div>
        <div className="subtitle">
          <h3>{reviewdata.clientReviewsSubTitle}</h3>
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
                        <div className="stars">
                          <StaticImage
                            className="star"
                            src="../../../images/vector.png"
                            alt="purple Star"
                          />
                          <StaticImage
                            className="star"
                            src="../../../images/vector.png"
                            alt="purple Star"
                          />
                          <StaticImage
                            className="star"
                            src="../../../images/vector.png"
                            alt="purple Star"
                          />
                          <StaticImage
                            className="star"
                            src="../../../images/vector.png"
                            alt="purple Star"
                          />
                          <StaticImage
                            className="star"
                            src="../../../images/vector.png"
                            alt="purple Star"
                          />
                        </div>
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