import React, { useCallback, useRef } from "react"
import { Link } from "gatsby"
import { Search } from "./search/search"
import { NavList } from "./navList"
import { useOpen } from "../../../hooks/useOpen"
import { OnClickOutside } from "../../../utils/onClickOutside"
import { NoScroll } from "../../../utils/noScroll"
import ProductCart from "./Cart/productCart"
import { CgClose } from "react-icons/cg";

export const Header = ({ logoText, headerRef, cartState, setCartState, itemLength }) => {
  const { isOpen: menuOpen, onToggle: toggleMenu, onClose: closeMenu, setIsOpen: setMenuOpen } = useOpen()

  const navIndent = headerRef?.current?.offsetHeight || 105
  const navRef = useRef()
  const burgerRef = useRef()
  const openCart = useCallback(() => {
    setCartState((c) => {
        return !c;
    });
}, [setCartState]);
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
        <button type={"button"} className={"cart-btn"} onClick={openCart}>Cart <span>{itemLength}</span></button>
        <button type={"button"} className={"close-btn"} onClick={openCart}><CgClose /> </button>
        <div className="blocker"></div>
      </div>
      {menuOpen && <OnClickOutside firstRef={navRef} secondRef={burgerRef} handler={closeMenu} />}
      {menuOpen && <NoScroll />}
    </header>
  )
}


