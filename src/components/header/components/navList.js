import { CreateRoutes } from "../../../utils/routes"
import { NavItem } from "./navItem"
import MainButton from "../../ui/main_button/MainButton"
import React, { useRef, useState } from "react"


export const NavList = ({ setMenuOpen }) => {
  const ROUTES = CreateRoutes()
  const cosedState = ROUTES.map(() => false)
  const [itemAccordionState, setItemAccordionState] = useState(cosedState)
  const onOpen = (item) => {
    return (
      () => {
        setItemAccordionState(cosedState.map((_, i) => {
          return i === item ? !itemAccordionState[i] : false
        }))
      }
    )
  }

  const headerListRef = useRef()

  return (
    <ul ref={headerListRef} className={"header-list"}>
      {ROUTES.map((item, i) => (
        <NavItem onOpen={onOpen(i)} isOpen={itemAccordionState[i]} setMenuOpen={setMenuOpen}
                 className={itemAccordionState[i] && "accordionOpen"}
                 item={item}
                 key={i} />
      ))}
      <li className={"order-button"}><MainButton onClick={() => {
        setMenuOpen(false)
      }}> ORDER NOW</MainButton></li>
    </ul>
  )
}