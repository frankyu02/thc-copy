import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BrandsStyles } from "./BrandsStyles";
import { getImageData } from "../../../utils/get_image_data";
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
                      link
                    }
                  }
                  brandsSubTitle
                  brandsTitle
                }
              }
            }
          }
    `)
    const {wpPage: {home: {brands}}} = data;
    return (
        <BrandsStyles>
            <div className="container">
                <div className={'brand-section'}>
                    <div className={'brand-title'}>
                        <h2>{brands.brandsTitle}</h2>
                        <h3>{brands.brandsSubTitle}</h3>
                    </div>
                    <div className={'brand-grid'}>
                        {brands.brandsLogo.map((item, key) => (
                            <Link to={item.brandsLogoItem.link || '#'} key={key} className={'brand-item'}>
                                <GatsbyImage image={getImage(item.brandsLogoItem.localFile.childrenImageSharp[0].gatsbyImageData)} alt={'brands'}/>
                            </Link>
                        ))}
                    </div>
                    <MainButton url={brands.brandsButton.url} target={brands.brandsButton.target}>{brands.brandsButton.title}</MainButton>
                </div>
            </div>
        </BrandsStyles>
    );
};

export default Brands;