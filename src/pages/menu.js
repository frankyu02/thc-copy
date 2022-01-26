import * as React from "react"
import { HeaderMenu } from "../components/header/HeaderMenu"
import { Footer } from "../components/footer/Footer"
import Layout from "../components/layout/Layout"

const Menu = () => {

  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }

  return (
    <>
      <Layout seo={seo}>
        <HeaderMenu />

        <Footer />
      </Layout>
    </>
  )
}

export default Menu