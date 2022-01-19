import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BrandsStyles } from "./BrandsStyles";
import { MainButton } from "../../ui/main_button/MainButton";

export const Brands = () => {
    const data = useStaticQuery(graphql`
        query {
            wpPage(uri: {eq: "/"}) {
              home {
                brands {
                  brandsButton {
                    title
                    target
                    url
                  }
                  brandsLogo {
                    brandsLogoItem {
                      altText
                      localFile {
                        childrenImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                  brandsSubTitle
                  brandsTitle
                }
              }
            }
          }
    `)
    const brands = data?.wpPage?.home?.brands;
    return (
        <BrandsStyles>
            <div className="container">
                <div className={'brand-section'}>
                    <div className={'brand-title'}>
                        <h2>{brands?.brandsTitle}</h2>
                        <h3>{brands?.brandsSubTitle}</h3>
                    </div>
                    <div className={'brand-grid'}>
                        {brands?.brandsLogo?.map?.((item, key) => (
                            <div key={key} className={'brand-item'}>
                                <GatsbyImage image={getImage(item?.brandsLogoItem?.localFile?.childrenImageSharp[0]?.gatsbyImageData)} alt={'brands'}/>
                            </div>
                        ))}
                    </div>
                    <MainButton url={brands?.brandsButton?.url} target={brands?.brandsButton?.target}>{brands?.brandsButton?.title}</MainButton>
                </div>
            </div>
        </BrandsStyles>
    );
};

export default Brands;