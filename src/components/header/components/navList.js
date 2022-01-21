import { ROUTES } from "../../../utils/config"
import { NavItem } from "./navItem"
import MainButton from "../../ui/main_button/MainButton"
import React, { useState } from "react"


export const NavList = () => {
  const cosedState = ROUTES.map(() => false)

  const [openItem, setOpenItem] = useState(cosedState)
  const onOpen = (openItem) => {
    console.log(openItem)
    return (
      () => {
        setOpenItem(cosedState.map((_, i) => {
          return i === openItem ? !openItem[i] : false
        }))
      }
    )
  }
  return (
    <ul className={"headerList"}>
      {ROUTES.map((item, i) => (
        <NavItem onOpen={onOpen(i)} isOpen={openItem[i]} className={openItem[i] && "accordionOpen"} item={item}
                 key={i} />
      ))}
      <li className={"order-button"}><MainButton> ORDER NOW</MainButton></li>
    </ul>
  )
}