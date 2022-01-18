import React from 'react';
// import { Link, useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeaderMenuStyles } from "./HeaderMenuStyles";
// import { getImageData } from "../../../utils/get_image_data";

export const HeaderMenu = () => {
      const data = useStaticQuery(graphql`
      query {
        wpMenu(id: {eq: "dGVybToy"}) {
          id
          menuItems {
            nodes {
              url
              childItems {
                nodes {
                  url
                  label
                }
              }
              label
            }
          }
        }
      }
  `)
    const {wpMenu: {home: {menuItems}}} = data;
    return (
        <HeaderMenuStyles>
        </HeaderMenuStyles>
    );
};

export default HeaderMenu;