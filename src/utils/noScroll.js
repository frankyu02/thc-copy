import { useNoScroll } from "../hooks/useNoScroll"
import React from "react"

export const NoScroll = () => {

  useNoScroll(true)
  return <> </>
}