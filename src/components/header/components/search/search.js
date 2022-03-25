import React, { useRef, useState } from "react"
import { SearchFrameStyled, SearchStyled } from "./search.styled"
import { useOpen } from "../../../../hooks/useOpen"
import { OnEscape } from "../../../../utils/onEscape"
import { OnClickOutside } from "../../../../utils/onClickOutside"
import { setSearch } from "../../../../utils/menu/setFilters"
import { useLocation } from '@reach/router';


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

  //Reach-Router
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("")
  const handleClick = () => {
    console.log("handleClick()--->, ", searchTerm)
    setSearch(searchTerm, location);
  }
  const updateText = (event) => {
    setSearchTerm(event.target.value)
  }
  const handleKeypress = (event) => {
    console.log("key press! ", event.key)
    if (event.keyCode === 13 || event.key === "Enter"){
      console.log("key press! ENTER KEY")
      setSearch(searchTerm, location);
    }
  }

  return <SearchFrameStyled isOpen={isOpen}>
    <div className="content">
      <input type="text" className="input" placeholder={"Search"} 
        onChange={updateText}
        onKeyPress={handleKeypress}
      />

      <button aria-label={"search"} type={"button"} className={"search-btn"} onClick={()=>(handleClick())}> 
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


