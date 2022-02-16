import * as React from "react"
import Seo from "../components/layout/Seo"
import MenuGrid from "../components/menu/menuHub"
import products from "../components/menu/dutchie-dumby-data.json"
const Menu = () => {

  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }

  return (
    <>
      <Seo {...seo} />
      <MenuGrid products={products.data.dutchieplus.menu.products}/>
    </>
  )
}

export default Menu