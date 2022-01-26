import React, {useEffect, useState} from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MerchCarouselStyled } from "./MerchCarousel.styled"
import { MainButton } from "../../ui/main_button/MainButton"
import { Swiper, SwiperSlide } from 'swiper/react';

export const MerchCarousel = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo3"}}) {
                edges {
                    node {
                        home {
                            merchCarousel {
                                merchCarouselTitle
                                merchCarouselSubTitle
                                merchCarouselCard {
                                    merchCarouselCardButton {
                                        target
                                        title
                                        url
                                    }
                                    merchCarouselCardImg {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData(quality: 100)
                                            }
                                        }
                                    }
                                    merchCarouselCardPrice
                                    merchCarouselCardTitle
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const width = window.innerWidth;
    const [slider, setSlider] = useState(true);
    function sliderShow() {
        if (width>968) {
            setSlider( true)
        }
        else {
            setSlider( false)
        }
    }
    const merchCarousel = data?.allWpPage?.edges[0]?.node?.home?.merchCarousel;
    const card = data?.allWpPage?.edges[0]?.node?.home?.merchCarousel?.merchCarouselCard;
    useEffect(()=> {
        sliderShow()
    }, )
    return (
        <MerchCarouselStyled>
            <div className={'merch_header'}>
                <div className={'container'}>
                    <h2>{merchCarousel?.merchCarouselTitle}</h2>
                    <h3>{merchCarousel?.merchCarouselSubTitle}</h3>
                </div>
            </div>
            <div className={'merch_parent'}>
                <div className={'container'}>
                    {slider ? <Swiper spaceBetween={20} slidesPerView={4.2} className={"merch_cart_list"}>
                        {card.map((item, key) => (
                            <SwiperSlide className={'card'} key={key}>
                                <div className={'cart_image_wrapper'}>
                                    <GatsbyImage className="cart_img"
                                                 image={getImage(item?.merchCarouselCardImg?.localFile)}
                                                 alt={"banner"} />
                                    <MainButton url={'#'}
                                                target={item?.merchCarouselCardButton?.target}>{item?.merchCarouselCardButton?.title}</MainButton>
                                </div>
                                <div className={'cart_description'}>
                                    <h4>{item?.merchCarouselCardTitle}</h4>
                                    <strong>{item?.merchCarouselCardPrice}</strong>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> : <div className={"merch_cart_list"}>
                        {card.map((item, key) => (
                            key < 6 ?
                                <div className={'card'} key={key}>
                                    <div className={'cart_image_wrapper'}>
                                        <GatsbyImage className="cart_img"
                                                     image={getImage(item?.merchCarouselCardImg?.localFile)}
                                                     alt={"banner"} />
                                        <MainButton url={item?.merchCarouselCardButton?.url}
                                                    target={item?.merchCarouselCardButton?.target}>{item?.merchCarouselCardButton?.title}</MainButton>
                                    </div>
                                    <div className={'cart_description'}>
                                        <h4>{item?.merchCarouselCardTitle}</h4>
                                        <strong>{item?.merchCarouselCardPrice}</strong>
                                    </div>
                                </div> : null
                        ))}
                    </div>}
                    <div className={'to_shop'}>
                        <MainButton url={"#"} target={'_blank'}>SHOP APPAREL</MainButton>
                    </div>
                </div>
            </div>
        </MerchCarouselStyled>
    )
}