import * as React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import { FooterTwoStyled } from "./FooterTwo.styled";

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
        <FooterTwoStyled>
            <div className="footer-menu-wrap">
                {nodes.map((item, key) => (
                    <Link to={item.url || '#'} key={key}>{item.label}</Link>
                ))}
            </div>
        </FooterTwoStyled>
    );
}