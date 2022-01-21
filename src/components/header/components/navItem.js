import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Icon from "../../../images/dropdown.js"
import { lg } from "../../../styles/utils/media_queries"

const MenuItem = styled.li`

  .icon {
    margin-left: 10px;
    display: inline-block;
  }

  padding: 5px 1px;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  //display: none;
  display: flex;
  ${lg(`
    display: flex; 
  `
  )}

  align-items: center;
  margin-right: 60px;
  position: relative;

  .dropDown {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: 100px;
    max-width: 130px;
    position: absolute;
    left: 0;
    text-align: center;
    top: 100%;
    background-color: #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }


  .dropdownItem {
    box-sizing: border-box;
    padding: 10px 5px;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 100%;
    z-index: 2;

    &:hover {
      background-color: #919191;
    }

  }

  &:hover {
    .dropdownItem {
      display: inline-flex;
    }
  }
`

export const NavItem = ({ item, className }) => {
  const showDropdown = item.items?.length > 0

  return (
    <MenuItem className={className}>
      {item.link ? <Link to={item.link}>{item.label}
        {showDropdown && <span className={"icon test"}>  <Icon /> </span>}
      </Link> : <p>{item.label} {showDropdown && <span className={"icon"}>  <Icon /> </span>} </p>}

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


