import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { VscGlobe } from "react-icons/vsc";
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { __BREAKPOINTS } from "../../../styles/utils/variables";
const Wrapper=styled.div`
    margin: 100px 0;
    width: 100%;
    height: 618px;
    display: flex;
    border: 1px solid black;
    background: white;
    .img{
        width: 50%;
        height: 100%;
        .map{
            width: 100%;
            height: 100%;
        }
    }
    .content{
        width: 50%;
        height: 100%;
        padding-top: 82px;
        padding-left: 95px;
        .text{
            width: 477px;
            p{
                margin: 0;
                padding: 0;
            }
            .icon{
                    font-size: 30px;
                    color: var(--darkpurple);
            }
            .address{
                display: flex;
                .addresstxt{
                    p{
                    font-family: "Integral CF";
                    font-style: italic;
                    font-size: 18px;
                    margin-left: 25px;
                    margin-bottom: 15px;
                    }
                }
            }
            .phone{
                display: flex;
                margin-top: 29px;
                .number{
                    font-family: "Integral CF";
                    font-style: italic;
                    font-size: 18px;
                    margin-left: 25px;
                    padding-top: 5px;
                }
            }
            .mail{
                margin-top: 30px;
                display: flex;
                .email{
                    font-family: "Integral CF";
                    font-style: italic;
                    font-size: 18px;
                    margin-left: 25px;
                    padding-top: 2px;
                }
            }
            .schedule{
                margin-top: 30px;
                display: flex;
                .datetxt{
                    .date{
                    font-family: "Integral CF";
                    font-style: italic;
                    font-size: 18px;
                    margin-left: 25px;
                    margin-bottom: 15px;
                    padding-top: 5px;
                    }
                }
            }
        }
        .btn{
            margin-top: 45px;
            border: 1px solid black;
            height: 60px;
            width: 477px;
            display: flex;
            align-items: center;
            justify-content: center;
            a{
                font-family:"Integral CF Bold";
                font-size: 18px;
            }
        }
    }
    @media(max-width: ${__BREAKPOINTS.xxs}px){
        flex-direction: column;
        height: auto;
        margin: 31px 0;
        .img{
            width: 100%;
            height: 309px;
        }
        .content{
            width: 100%;
            min-height: 472px;
            padding-top: 20px;
            padding-left: 0;
            .text{
                margin-left: 34px;
                width: 100%;
                .address{
                    .addresstxt{
                        p{
                            margin-left: 18px;
                        }
                    }
                }   
                .phone{
                    .number{
                        margin-left: 18px;
                    }
                }
                .mail{
                    .email{
                        margin-left: 18px;
                    }
                }
                .schedule{ 
                    .datetxt{
                        .date{
                            margin-left: 18px;
                        }
                    }
                }
            }
            .btn{
                margin-top:26px;
                height: 60px;
                width: 100%;
                background: var(--darkpurple);
                float: bottom;
                a{
                    color: white;
                }
            }
        }
    }
    @media(max-width: 380px){
        .content{
            .text{
                margin-left: 10px;
            }
        }
    }
`;

export default function ContactMap(){
    const data = useStaticQuery(graphql`
        query{
            wpPage(title: {eq: "Contact us"}) {
                contactUs {
                    contactUsLocation {
                        contactUsLocationButton {
                        target
                        title
                        url
                        }
                        contactUsLocationInfo {
                            contactUsLocationInfoText {
                                contactUsLocationInfoTextItem
                            }
                        contactUsLocationInfoImg {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(quality: 100)
                                }
                            }
                        }
                        }
                        contactUsLocationMap {
                            contactUsLocationMapImg {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(quality: 100)
                                    }
                                }
                            }
                        }
                    }
                }
            }   
        }
    `)
    const info = data.wpPage.contactUs.contactUsLocation;
    const text = info.contactUsLocationInfo;
    const map = info.contactUsLocationMap.contactUsLocationMapImg.localFile.childImageSharp.gatsbyImageData;
    const buttontxt = info.contactUsLocationButton;
    return(
        <div className="container">
            <Wrapper>
                <div className="img">
                    <GatsbyImage className="map" image={getImage(map)} alt={"map"} />
                </div>
                <div className="content">
                    <div className="text">
                        <div className="address">
                            <p className="icon"><VscGlobe /></p>
                            <div className="addresstxt">
                                {text[0].contactUsLocationInfoText.map((text, index) => {
                                    return(
                                        <p key={index}>{text.contactUsLocationInfoTextItem}<br /></p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="phone">
                            <p className="icon"><AiOutlinePhone /></p>
                            {text[1].contactUsLocationInfoText.map((text, index) => {
                                    return(
                                        <p  className="number" key={index}>{text.contactUsLocationInfoTextItem}<br /></p>
                                    )
                            })}
                        </div>
                        <div className="mail">
                            <p className="icon"><GoMail /></p>
                            {text[2].contactUsLocationInfoText.map((text, index) => {
                                    return(
                                        <p  className="email" key={index}>{text.contactUsLocationInfoTextItem}<br /></p>
                                    )
                            })}
                        </div>
                        <div className="schedule">
                            <p className="icon"><IoCalendarNumberOutline /></p>
                            <div className="datetxt">
                            {text[3].contactUsLocationInfoText.map((text, index) => {
                                    return(
                                        <p  className="date" key={index}>{text.contactUsLocationInfoTextItem} <br /></p>
                                    )
                            })}
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <a href={buttontxt.url} target={buttontxt.target}>{buttontxt.title}</a>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}