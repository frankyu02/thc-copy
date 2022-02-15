import * as React from "react"
import Seo from "../components/layout/Seo"
import MenuGrid from "../components/menu/menuHub"

const Menu = () => {

  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }

  return (
    <>
      <Seo {...seo} />
      <MenuGrid />
    </>
  )
}

export default Menu