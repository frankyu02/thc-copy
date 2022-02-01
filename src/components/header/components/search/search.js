import React, { useRef } from "react"
import { SearchFrameStyled, SearchStyled } from "./search.styled"
import { useOpen } from "../../../../hooks/useOpen"
import { OnEscape } from "../../../../utils/onEscape"
import { OnClickOutside } from "../../../../utils/onClickOutside"


export const Search = () => {
  const { isOpen, onToggle, onClose } = useOpen()
  const searchRef = useRef()

  return (
    <SearchStyled>
      <span ref={searchRef}>
     
            <button onClick={onToggle} aria-label={"open search "} type={"button"}
                    className={"search-btn " + (isOpen ? " hide-border" : "")}>

        <svg style={{ display: isOpen ? "none" : "inline" }} width="26" height="24" viewBox="0 0 26 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.7368" cy="10.7368" r="9.73684" stroke="black" strokeWidth="2" />
          <line x1="18.3914" y1="16.9771" x2="24.7072" y2="23.2929" stroke="black" strokeWidth="2" />
        </svg>
        <span style={{ display: !isOpen ? "none" : "inline" }}>  ESC</span>
      </button>
         <SearchFrame searchRef={searchRef} onClose={onClose} isOpen={isOpen} />

      </span>
      {isOpen && <OnEscape callback={onClose} />}
    </SearchStyled>

  )
}

const SearchFrame = ({ isOpen, searchRef, onClose }) => {

  return <SearchFrameStyled isOpen={isOpen}>
    <div className="content">
      <input type="text" className="input" placeholder={"Search"} />
      <button type={"button"} className={"search-btn"}>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.7368" cy="10.7368" r="9.73684" stroke="black" strokeWidth="2" />
          <line x1="18.3914" y1="16.9771" x2="24.7072" y2="23.2929" stroke="black" strokeWidth="2" />
        </svg>
      </button>
      {isOpen && <OnClickOutside firstRef={searchRef} handler={onClose} />}
    </div>


  </SearchFrameStyled>

}


