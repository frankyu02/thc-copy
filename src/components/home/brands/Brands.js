import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BrandsStyles } from "./BrandsStyles";

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
                    <Link to={brands.brandsButton.url || '#'} className="btn btn--white" target={brands.brandsButton.target}>{brands.brandsButton.title}</Link>
                </div>
            </div>
        </BrandsStyles>
    );
};

export default Brands;