import * as React from "react";
import {Link, StaticQuery, graphql, useStaticQuery} from "gatsby";
import { FooterSocialStyles } from "./FooterSocialStyles";

export const FooterSocial = () => {
    const data = useStaticQuery(graphql`
        query {
            wpMenu(name: {eq: "Footer Menu Social"}) {
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
        <FooterSocialStyles>
            {nodes.map((item, key) => (
                <div className="social-item" key={key}>
                    <Link to={item.url || '#'} key={key}>{item.label}</Link>
                </div>
            ))}
        </FooterSocialStyles>
    );
}