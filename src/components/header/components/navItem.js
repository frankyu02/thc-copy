import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Item = styled.li`

  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-right: 60px;

  .dropdownItem {
    display: none;
  }
`

export const NavItem = ({ item }) => {

  const url = item.node.url
  console.log(url)
  return (
    <Item>
      {item.url ? <Link to={item.url}>{item.node.label}</Link> : <p>{item.node.label}  </p>}
      {item.node?.childItems?.nodes?.length !== 0 ?
        item.node.childItems.nodes.map((item, key) => (
          <Link className={"dropdownItem"} key={key} to={item.url || "#"}>{item.label}</Link>
        )) : ""
      }
    </Item>
  )
}


