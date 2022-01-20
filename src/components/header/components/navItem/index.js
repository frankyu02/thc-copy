import React from "react"
import { Link } from "gatsby"
import DesktopIcon from "../../../../images/dropdown.js"
import { MenuItem } from "./navItem.styled"


export const NavItem = ({ item, className }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {showDropdown ?
        <span>{item.label} <span className={"desktopIcon"}>   <DesktopIcon />   </span></span> :
        <Link to={item.link}>{item.label}   </Link>}

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


