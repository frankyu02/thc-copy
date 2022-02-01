import React, { useRef } from "react"
import { Link } from "gatsby"
import { Search } from "./search/search"
import { NavList } from "./navList"
import { useOpen } from "../../../hooks/useOpen"
import { OnClickOutside } from "../../../utils/onClickOutside"
import { NoScroll } from "../../../utils/noScroll"


export const Header = ({ logoText, headerRef }) => {
  const { isOpen: menuOpen, onToggle: toggleMenu, onClose: closeMenu, setIsOpen: setMenuOpen } = useOpen()

  const navIndent = headerRef?.current?.offsetHeight || 105
  const navRef = useRef()
  const burgerRef = useRef()
  return (
    <header className={"header"}>
      <button aria-label={"open menu "} ref={burgerRef} onClick={toggleMenu} type={"button"}
              className={"menu-btn " + (menuOpen ? " open" : "")}>
        <div className={"line"}></div>
        <div className={"line"}></div>
        <div className={"line"}></div>
      </button>
      <div className="logo">
        <Link to={"/"}>{logoText}</Link>
      </div>

      <nav ref={navRef} style={{ top: navIndent }} className={"nav " + (menuOpen ? " open" : "")}>
        <NavList setMenuOpen={setMenuOpen} />
      </nav>

      <Search />
      <div className={"cart"}>
        <button type={"button"} className={"cart-btn"}>Cart <span>0</span></button>
      </div>

      {menuOpen && <OnClickOutside firstRef={navRef} secondRef={burgerRef} handler={closeMenu} />}
      {menuOpen && <NoScroll />}
    </header>
  )
}


