import * as React from "react"
import { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FooterStyled } from "./Footer.styled"
import { FooterSocial } from "./footer-social/FooterSocial"
import { FooterTwo } from "./footer-two/FooterTwo"
import { __BREAKPOINTS } from "../../styles/utils/variables"

export const Footer = () => {
  const [lazy, setLazy] = useState(false)
  useEffect(() => {
    if (window?.innerWidth > __BREAKPOINTS.md) {
      setLazy && setLazy(true)
    } else {
      if (window) {
        setTimeout(() => {
          setLazy && setLazy(true)
        }, 2500)
      }
    }
  }, [])
  const data = useStaticQuery(graphql`
        query {
            wpMenu(name: {eq: "Footer Menu"}) {
                menuItems {
                  nodes {
                    label
                    url
                    path
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
  const nodes = data?.wpMenu?.menuItems?.nodes
  const footer = data?.wp?.acfOptionsFooterOptions?.footer
  const Html = () => {
    return (
      <div className="container">
        <div className="footer-wrap">
          <h2>{footer?.footerTitle}</h2>
          <div className="footer-menu">
            <div className="footer-menu-wrap">
              {nodes?.map?.((item, key) => (
                <Link className="menu-item" to={item?.path || "#"} key={key}>{item?.label}</Link>
              ))}
            </div>
          </div>


          <form className="footer-form" 
            action="https://www.getdrip.com/forms/219361297/submissions" 
            data-drip-embedded-form="219361297"
            method="post"
          >
            <h3 data-drip-attribute="headline">{footer?.footerEmail?.footerEmailTitle}</h3>
            <label className="footer-form__email" htmlFor="footerFormEmail">
              <input 
                id="footerFormEmail" 
                type="email"
                placeholder={footer?.footerEmail?.footerEmailPlaceholder}
                name="fields[email]"
              />
              <button aria-label={"subscribe on updates"} type="submit">
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7325 0L36 15.5604V16.5275L20.7325 32L17.3494 28.6593L29.841 17.7582L21.8602 18.2857H0V13.7143H21.8602L29.841 14.2418L17.4361 3.34066L20.7325 0Z"
                    fill="black" />
                </svg>
              </button>
            </label>
            <div className="field checkbox">
              <input type="checkbox" id="footer_form_agree" name="agree" required />
              <label htmlFor="footer_form_agree">{footer?.footerEmail?.footerEmailCheckboxText}</label>
            </div>
          </form>


          <div className="footer-location">
            <div className="location">
              {footer?.footerContact?.footerLocation?.map?.((item, key) => (
                <p key={key}>{item?.footerLocationItem}</p>
              ))}
            </div>
            <div className="footer-contact">
              {footer?.footerContact?.footerContactInfo?.map?.((item, key) => (
                <p key={key}>{item?.footerContactInfoItem}</p>
              ))}
            </div>
          </div>
          <FooterTwo />
          <FooterSocial />
        </div>
        <p className="copyright">{footer?.footerCopyRight}</p>
      </div>
    )
  }
  return (
    lazy ? <FooterStyled>
      <Html />
    </FooterStyled> : <footer className={"loading"}><Html /></footer>
  )
}