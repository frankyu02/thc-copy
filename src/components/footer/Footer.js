import * as React from "react";
import {Link, StaticQuery, graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { FooterStyles } from "./FooterStyles";
import { FooterSocial } from "./footer-social/FooterSocial";
import { FooterTwo } from "./footer-two/FooterTwo";

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(name: {eq: "Footer Menu"}) {
                menuItems {
                  nodes {
                    label
                    url
                  }
                }
            }
        }
    `)
    const {wpMenu: {menuItems: {nodes}}} = data;
    return (
        <FooterStyles>
            <div className="container">
                <h2></h2>
                <div className="footer-social-wrap">
                    {nodes.map((item, key) => (
                        <div className="social-item" key={key}>
                            <Link to={item.url || '#'} key={key}>{item.label}</Link>
                        </div>
                    ))}
                </div>
                <FooterTwo/>
                <FooterSocial/>
            </div>
        </FooterStyles>
    );
}