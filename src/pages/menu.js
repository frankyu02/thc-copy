import * as React from "react"
import Seo from "../components/layout/Seo"

const Menu = () => {

  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }

  return (
    <>
      <Seo {...seo} />
      <h1> MENU</h1>
    </>
  )
}

export default Menu