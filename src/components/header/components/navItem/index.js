import React from "react"
import { Link } from "gatsby"
import DesktopIcon from "../../../../images/dropdown.js"
import { MenuItem } from "./navItem.styled"
import styled from "styled-components"
import { DropDownStyled } from "./dropdown.styled"
import { lg } from "../../../../styles/utils/media_queries"

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

const DropDrown = ({ dropDownItems, isOpen }) => {

  return (
    <DropDownStyled isOpen={isOpen} className={"drop-down"}>
      {
        dropDownItems.map((subItem, i) => (
          <li className={"dropdown-item"} key={i}>
            <Link className={"dropdown-item-link"} to={subItem.link || "#"}>{subItem.label}</Link>
          </li>
        ))
      }
    </DropDownStyled>
  )

}

export const NavItem = ({ item, className, onOpen, isOpen }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {showDropdown ?
        <button onClick={onOpen} className={"menu-active"}>{item.label} <MobileIcon isOpen={isOpen} /> <span
          className={"desktop-icon"}><DesktopIcon /></span></button> :
        <Link className={"menu-active"} to={item.link}>{item.label}   </Link>}
      {item.items?.length > 0 ? < DropDrown isOpen={isOpen} dropDownItems={item.items} /> : ""}
    </MenuItem>
  )
}




