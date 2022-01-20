import * as React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import { FooterSocialStyled } from "./FooterSocial.styled";

export const FooterSocial = () => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(name: {eq: "Footer Menu Social"}) {
                menuItems {
                  nodes {
                    label
                    url
                    path  
                  }
                }
            }
        }
    `)
    const {wpMenu: {menuItems: {nodes}}} = data;
    return (
        <FooterSocialStyled>
            {nodes.map((item, key) => (
                <Link to={item.path || '#'} key={key}>{item.label}</Link>
            ))}
        </FooterSocialStyled>
    );
}