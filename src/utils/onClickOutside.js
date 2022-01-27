import { useOnClickOutside } from "../hooks/useOnClickOutside"
import React from "react"

export const OnClickOutside = ({ firstRef, handler, secondRef = false }) => {
  useOnClickOutside(firstRef, handler, secondRef);
  return <></>
}


//usage

// {isOpen && <OnClickOutside firstRef={searchRef} handler={onClose} />}
// secondRef - optional
//usage