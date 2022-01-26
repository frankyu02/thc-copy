import * as React from "react"
import Layout from "../components/layout/Layout"
import HeaderMenu from "../components/header/HeaderMenu"
import { Footer } from "../components/footer/Footer"
import { Link } from "gatsby"


const NotFoundPage = () => {
  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }
  return (
    <Layout seo={seo}>
      <HeaderMenu />
      <div className="container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link style={{ color: "blue", marginBottom: "50px", display: "block" }} to={"/"}> go home </Link>

      </div>

      <Footer />
    </Layout>
  )

}


export default NotFoundPage


