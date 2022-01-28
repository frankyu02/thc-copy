import React, { useContext } from "react";
import { PostContentContext } from "../../../contexts/post-content";
import { SidebarStyles } from './Sidebar.styled'; 


export const SidebarContent = () => {
  const { title, share } = useContext(PostContentContext);
  const currentUrl = typeof window !== 'undefined' && window.location.href;

  return (
    <SidebarStyles>
      <div className="sidebar">

        {
          share ?
          <div className="socials">
            <div className="sidebar-title">share</div>
            <ul className="sidebar-links">
              <li>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&t=${title}`} target="_blank" rel="noreferrer">facebook</a>
              </li>
              <li>
                <a href={`https://twitter.com/intent/tweet?url=${currentUrl}`} target="_blank" rel="noreferrer">twitter</a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} target="_blank" rel="noreferrer">linkedin</a>
              </li>
            </ul>
          </div> : null
        }

      </div>
    </SidebarStyles>
  )
}