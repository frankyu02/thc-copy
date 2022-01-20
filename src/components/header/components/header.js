import React from "react"
import { Link } from "gatsby"
import { NavItem } from "./navItem"
import { Search } from "./search"
import { ROUTES } from "../../../utils/config"

export const Header = ({ toggleMenu, menuOpen, logoText, headerRef }) => {

  const navIndent = headerRef?.current?.offsetHeight || 105
  return (
    <header className={"header"}>
      <button onClick={toggleMenu} type={"button"} className={"menu-btn " + (menuOpen ? " open" : "")}>
        <div className={"line"}></div>
        <div className={"line"}></div>
        <div className={"line"}></div>
      </button>
      <div className="logo">
        <Link to={"/"}>{logoText}</Link>
      </div>
      <nav style={{ top: navIndent }} className={"nav " + (menuOpen ? " open" : "")}>
        <ul className={"headerList"}>
          {ROUTES.map((item, i) => (
            <NavItem className={"menu-item"} item={item} key={i} />
          ))}
        </ul>
      </nav>

      <Search />
      <div className={"cart"}>
        <button type={"button"} className={"cart-btn"}>Cart <span>0</span></button>
      </div>
    </header>
  )
}


