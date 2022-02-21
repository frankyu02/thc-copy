import * as React from "react"
import Seo from "../components/layout/Seo"
import products from "../components/menu/dutchie-dumby-data.json"
const Menu = () => {

  const seo = {
    title: "Menu",
    description: "shop cannabis"
  }

  return (
    <>
      <Seo {...seo} />
    </>
  )
}

export default Menu