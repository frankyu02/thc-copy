import * as React from "react"
import { HeaderMenu } from "../components/header/HeaderMenu"
import { Footer } from "../components/footer/Footer"
import Layout from "../components/layout/Layout"

const HomePage = () => {

  const seo = {
    title: 'Home Title',
    description: 'Home Description'
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

export default HomePage;