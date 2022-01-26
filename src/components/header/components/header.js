import React, { useRef } from "react"
import { Link } from "gatsby"
import { Search } from "./search/search"
import { NavList } from "./navList"
import { useOnClickOutside } from "../../../hooks/useOnClickOutside"
import { useOpen } from "../../../hooks/useOpen"
import { useNoScroll } from "../../../hooks/useNoScroll"

const ClickOutsideChecker = ({ navRef, closeMenu, burgerRef }) => {
  useOnClickOutside(navRef, closeMenu, burgerRef)

  return <>  </>
}
export const Header = ({ logoText, headerRef }) => {
  const { isOpen: menuOpen, onToggle: toggleMenu, onClose: closeMenu, setIsOpen: setMenuOpen } = useOpen()
  useNoScroll(menuOpen)
  const navIndent = headerRef?.current?.offsetHeight || 105
  const navRef = useRef()
  const burgerRef = useRef()
  return (
    <header className={"header"}>
      <button ref={burgerRef} onClick={toggleMenu} type={"button"} className={"menu-btn " + (menuOpen ? " open" : "")}>
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
      {menuOpen && <ClickOutsideChecker navRef={navRef} burgerRef={burgerRef} closeMenu={closeMenu} />}
    </header>
  )
}


