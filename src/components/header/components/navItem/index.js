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
    transform: translateY(-50%);
    content: '';
    height: 2px;
    background-color: var(--darkpurple);
    transition: 1s;
  }

  &::after {
    transform: rotate(-90deg);
  }

`

export const NavItem = ({ item, className }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {showDropdown ?
        <button className={"menuActive"}>{item.label} <MobileIcon /> <span
          className={"desktopIcon"}><DesktopIcon /></span></button> :
        <Link className={"menuActive"} to={item.link}>{item.label}   </Link>}

      {item.items?.length > 0 ? <ul className={"dropDown"}>
          {
            item.items.map((subItem, key) => (
              <li className={"order-button"} key={key}>
                <Link className={"dropdownItem"} to={subItem.link || "#"}>{subItem.label}</Link>
              </li>
            ))
          }
        </ul>
        : ""
      }
    </MenuItem>
  )
}


