import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/Seo"


const NotFoundPage = () => {
  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }
  return (
    < >
      <Seo {...seo} />
      <div className="container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link style={{ color: "blue", marginBottom: "50px", display: "block" }} to={"/"}> go home </Link>
      </div>

    </ >
  )

}


export default NotFoundPage


