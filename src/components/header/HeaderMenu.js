import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeaderMenuStyles } from "./HeaderMenuStyles";
import { getImageData } from "../../utils/get_image_data";

export const HeaderMenu = () => {
      const data = useStaticQuery(graphql`
      query {
        allWpMenuItem(filter: {locations: {eq: MENU_HEADER}, parentDatabaseId: {eq: 0}}) {
          edges {
            node {
              label
              url
              childItems {
                nodes {
                  label
                  url
                }
              }
            }
          }
        }
      }
  `)
    const {allWpMenuItem: {edges: nodes}} = data;
    console.log(nodes);
    return (
        <HeaderMenuStyles>
          <div className={'header-alert'}>
            <div className={'container'}>FREE DELIVERY ON ALL ORDERS OVER $50</div>
          </div>
          <header>
            <div className={'container'}>
                {nodes.map((item, key) => (
                        <div className={'item'} key={key}>
                            <Link to={item.url || '#'}>{item.label}</Link>
                        </div>
                  ))}
            </div>
          </header>
        </HeaderMenuStyles>
    );
};

export default HeaderMenu;