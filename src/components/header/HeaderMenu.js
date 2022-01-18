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
            site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
        }
    `)
    const {allWpMenuItem: {edges: node}} = data;
    const {site: {siteMetadata}} = data;
    console.log(node[0]);
    return (
        <HeaderMenuStyles>
            <div className={'header-alert'}>
                <div className={'container'}>FREE DELIVERY ON ALL ORDERS OVER $50</div>
            </div>
            <header className={'header'}>
                <div className="item header-logo">
                    <Link to={siteMetadata.siteUrl || '#'}>{siteMetadata.title}</Link>
                </div>
                <div className={'header-nav'}>
                    <nav className={'header-nav'}>
                        <ul>
                            {node.map((item, key) => (
                                <li className={'item'} key={key}>
                                    <Link to={item.url || '#'}>{item.node.label}</Link>
                                    {/* {item.node.childItems.nodes.length != 0 ?

                          item.node.childItems.nodes.map((item, key)=> (

                              <Link to={item.url || '#'}>{item.label}</Link>

                            )) : ""
                        } */}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={'search'}>
                    <button type={'button'} className={'search-btn'}>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10.7368" cy="10.7368" r="9.73684" stroke="black" strokeWidth="2"/>
                            <line x1="18.3914" y1="16.9771" x2="24.7072" y2="23.2929" stroke="black" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
                <div className={'card'}>
                    <button type={'button'} className={'card-btn'}>Cart <span>0</span></button>
                </div>
            </header>
        </HeaderMenuStyles>
    );
};

export default HeaderMenu;