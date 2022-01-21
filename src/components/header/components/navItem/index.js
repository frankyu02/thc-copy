import React from "react"
import { Link } from "gatsby"
import DesktopIcon from "../../../../images/dropdown.js"
import { MenuItem } from "./navItem.styled"
import styled from "styled-components"

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
`

const DropDrown = ({ dropDownItems }) => {
  return (
    <ul className={"dropDown"}>
      {
        dropDownItems.map((subItem, i) => (
          <li className={"order-button"} key={i}>
            <Link className={"dropdownItem"} to={subItem.link || "#"}>{subItem.label}</Link>
          </li>
        ))
      }
    </ul>
  )

}

export const NavItem = ({ item, className, onOpen, isOpen }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {showDropdown ?
        <button onClick={onOpen} className={"menuActive"}>{item.label} <MobileIcon isOpen={isOpen} /> <span
          className={"desktopIcon"}><DesktopIcon /></span></button> :
        <Link className={"menuActive"} to={item.link}>{item.label}   </Link>}
      {item.items?.length > 0 ? < DropDrown dropDownItems={item.items} /> : ""}
    </MenuItem>
  )
}




