import * as React from "react"
import { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HeaderMenuStyled } from "./HeaderMenu.styled"
import { PromoBar } from "./components/promobar"
import { Header } from "./components/header"
import sal from 'sal.js';
import '../../../node_modules/sal.js/dist/sal.css';

sal({
  threshold: 1,
  once: false,
});

export const HeaderMenu = () => {
  const data = useStaticQuery(graphql`
        query { 
         site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
             wp {
    acfOptionsHeaderOptions {
      preHeader {
        promobarText
      }
    }
  }
        }
    `)


  const logoText = data?.site?.siteMetadata?.title
  const promobarText = data?.wp?.acfOptionsHeaderOptions?.preHeader?.promobarText
  const headerRef = useRef()

  return (
    <HeaderMenuStyled>
      <div ref={headerRef} data-sal="fade"> {/*header height calculation */}
        <PromoBar promoText={promobarText} />
        <Header headerRef={headerRef}
                logoText={logoText} />
      </div>

    </HeaderMenuStyled>


  )
}

export default HeaderMenu


