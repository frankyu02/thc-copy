import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { __BREAKPOINTS } from "../../../../styles/utils/variables";
const Background =styled.section`
    background: rgb(240, 240, 240);
    display: flex;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 360px;
    margin-bottom: 56px;
    background: white;
    display: flex;
    .text{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title{
            font-family: "Integral CF Bold";
            font-size: 40px;
            text-align: center;
            font-style: italic;
            span{
                color: var(--darkpurple);
            }
        }
        p{
            font-family: "MADE Outer Sans Light";
            font-weight: 400;
            text-align: center;
            font-size: 14px;
            width: 387px;
        }
    }
    .img{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .subtitleMobile{
        display: none;
    }
    @media (max-width: ${__BREAKPOINTS.xs}px){
        flex-direction: column;
        height: auto;
        margin-bottom: 10px;
        .text{
            width: 100%;
            margin-top: 20px;
            p{
                display: none;
            }
        }
        .img{
            width: 100%;
        }
        .subtitleMobile{
            display: inline;
            p{
                font-family: "MADE Outer Sans Light";
                font-weight: 400;
                text-align: center;
                font-size: 14px;
            }
        }
    }
`;
export default function LocationParking(){
    const data = useStaticQuery(graphql`
        query{
            allWpPage(filter: {id: {eq: "cG9zdDo2NDM="}}) {
    nodes {
      location {
        locationParkingBanner {
          bannerParagraph
          bannerTitle
          bannerImg {
            altText
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
    `)
    const title = data?.allWpPage?.nodes[0]?.location?.locationParkingBanner?.bannerTitle;
    const subtitle = data?.allWpPage?.nodes[0]?.location?.locationParkingBanner?.bannerParagraph;
    const locationImg = data?.allWpPage.nodes[0]?.location?.locationParkingBanner?.bannerImg?.localFile;
    const altText = data?.allWpPage.nodes[0]?.location?.locationParkingBanner?.bannerImg?.altText;
    return(
        <Background>
            <div className="container">
                <Wrapper>
                    <div className="text">
                        <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
                        <p>{subtitle}</p>
                    </div>
                    <div className="img">
                        <GatsbyImage image={getImage(locationImg)} alt={altText} />
                    </div>
                    <div className="subtitleMobile">
                        <p>{subtitle}</p>
                    </div>
                </Wrapper>
            </div>
        </Background>
    )
}