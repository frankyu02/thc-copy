import * as React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import { FooterTwoStyles } from "./FooterTwoStyles";

export const FooterTwo = () => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(name: {eq: "Footer Menu Two"}) {
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
        <FooterTwoStyles>
            <div className="footer-menu-wrap">
                {nodes.map((item, key) => (
                    <Link to={item.url || '#'} key={key}>{item.label}</Link>
                ))}
            </div>
        </FooterTwoStyles>
    );
}