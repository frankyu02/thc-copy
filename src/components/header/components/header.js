import React from "react"
import { Link } from "gatsby"
import { NavItem } from "./navItem"
import { Search } from "./search"

export const Header = ({ logoText, navItems }) => {
  console.log(navItems)
  return (
    <header className={"header"}>
      <div className="item header-logo">
        <Link to={"/"}>{logoText}</Link>
      </div>
      <div className={"header-nav"}>
        <nav className={"header-nav"}>
          <ul>
            {navItems.map((item, i) => (
              <NavItem item={item} key={i} />
            ))}
          </ul>
        </nav>
      </div>
      <Search />
      <div className={"cart"}>
        <button type={"button"} className={"cart-btn"}>Cart <span>0</span></button>
      </div>
    </header>
  )
}


