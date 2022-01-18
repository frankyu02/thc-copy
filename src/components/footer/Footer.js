import * as React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
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
            wp {
                acfOptionsFooterOptions {
                  footer {
                    fieldGroupName
                    footerCopyRight
                    footerTitle
                    footerEmail {
                      fieldGroupName
                      footerEmailCheckboxText
                      footerEmailPlaceholder
                      footerEmailTitle
                    }
                    footerContact {
                      fieldGroupName
                      footerContactInfo {
                        fieldGroupName
                        footerContactInfoItem
                      }
                      footerLocation {
                        fieldGroupName
                        footerLocationItem
                      }
                    }
                  }
                }
            }
        }
    `)
    const {wpMenu: {menuItems: {nodes}}} = data;
    const {wp: {acfOptionsFooterOptions: {footer}}} = data;
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer-wrap">
                    <h2>{footer.footerTitle}</h2>
                    <div className="footer-menu">
                        <div className="footer-menu-wrap">
                            {nodes.map((item, key) => (
                                <Link className="menu-item" to={item.url || '#'} key={key}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                    <form className="footer-form" action="#">
                        <h3>{footer.footerEmail.footerEmailTitle}</h3>
                        <label className="footer-form__email" htmlFor="footerFormEmail">
                            <input id="footerFormEmail" type="email" placeholder={footer.footerEmail.footerEmailPlaceholder}/>
                            <button type="submit">
                                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7325 0L36 15.5604V16.5275L20.7325 32L17.3494 28.6593L29.841 17.7582L21.8602 18.2857H0V13.7143H21.8602L29.841 14.2418L17.4361 3.34066L20.7325 0Z" fill="black"/>
                                </svg>
                            </button>
                        </label>
                        <label className="footer-form-checkbox" htmlFor="footerFormCheckBox">
                            <span></span>
                            <input type="checkbox"/>
                            {footer.footerEmail.footerEmailCheckboxText}
                        </label>
                    </form>
                    <div className="footer-location">
                        <div className="location">
                            {footer.footerContact.footerLocation.map((item, key) => (
                                <p key={key}>{item.footerLocationItem}</p>
                            ))}
                        </div>
                        <div className="footer-contact">
                            {footer.footerContact.footerContactInfo.map((item, key) => (
                                <p key={key}>{item.footerContactInfoItem}</p>
                            ))}
                        </div>
                    </div>
                    <FooterTwo/>
                    <FooterSocial/>
                </div>
                <p className="copyright">{footer.footerCopyRight}</p>
            </div>
        </FooterStyles>
    );
}