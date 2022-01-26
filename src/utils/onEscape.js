import React, { useCallback, useEffect } from "react"


export const OnEscape = ({ callback }) => {
  const func = useCallback((e) => {

    if (e.code === "Escape") {
      callback()
    }

  }, [callback])
  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", func)
    }
    return () => {
      window.removeEventListener("keydown", func)
    }
  }, [func])

  return <></>
}


//usage

// {isOpen && <OnEscape callback={onClose}/>}

//usage