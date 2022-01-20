import React from "react"
import { Link } from "gatsby"
import Icon from "../../../../images/dropdown.js"
import { MenuItem } from "./navItem.styled"


export const NavItem = ({ item, className }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {showDropdown ? <p>{item.label} <span className={"icon"}>  <Icon /> </span></p> :
        <Link to={item.link}>{item.label}   </Link>}

      {item.items?.length > 0 ? <ul className={"dropDown"}>
          {
            item.items.map((subItem, key) => (
              <li key={key}>
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


