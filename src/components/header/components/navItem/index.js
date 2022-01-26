import React from "react"
import { Link } from "gatsby"
import DesktopIcon from "../../../../images/dropdown.js"
import { MenuItem } from "./navItem.styled"
import styled from "styled-components"
import { DropDownStyled } from "./dropdown.styled"
import { lg } from "../../../../styles/utils/media_queries"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowIcon } from "../../../../images/arrowIcon"
import { __BREAKPOINTS } from "../../../../styles/utils/variables"

const MobileIcon = styled.div`
  height: 28px;
  width: 28px;
  position: relative;

  &::before, &::after {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    content: '';
    height: 2px;
    background-color: var(--darkpurple);
    transition: 0.1s;
  }

  &::after {
    transform: ${props => props.isOpen ? " " : "rotate(-90deg)"};
  }

  ${lg(`
  display:none
  `)}
`

const DropDrown = ({ dropDownItems, isOpen: mobileIsOpen, onOpen, setMenuOpen }) => {
  const isOpen = mobileIsOpen && window?.innerWidth < __BREAKPOINTS.lg
  const oddItem = dropDownItems.length % 2 > 0
  const columnCounter = Math.round(dropDownItems.length / 2)

  return (
    <DropDownStyled columnCounter={columnCounter} isOpen={isOpen}
                    className={"drop-down " + (oddItem ? "odd" : " even ")}>

      {
        dropDownItems.map((subItem, i) => (
          <li className={"dropdown-item"} key={i}>

            <Link onClick={() => {
              onOpen && onOpen(false)
              setMenuOpen && setMenuOpen(false)
            }} className={"dropdown-item-link"} to={subItem.url || "/"}>
              <span>   {subItem.label} <span className={"iconArrow"}> <ArrowIcon />  </span>
            </span> </Link>
            <GatsbyImage className="dropdown-item-img"
                         image={getImage(subItem.image?.image?.localFile)}
                         alt={subItem.image?.image?.altText || "link to shop"} />
          </li>
        ))
      }
    </DropDownStyled>
  )

}

export const NavItem = ({ item, className, onOpen, isOpen, setMenuOpen }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {showDropdown ?
        <button onClick={onOpen} className={"menu-active"}>{item.label} <MobileIcon isOpen={isOpen} /> <span
          className={"desktop-icon"}><DesktopIcon /></span></button> :
        <Link onClick={() => {
          setMenuOpen && setMenuOpen(false)
        }
        } className={"menu-active"} to={item.link}>{item.label}   </Link>}
      {item.items?.length > 0 ?
        < DropDrown isOpen={isOpen} setMenuOpen={setMenuOpen} onOpen={onOpen} dropDownItems={item.items} /> : ""}
    </MenuItem>
  )
}




