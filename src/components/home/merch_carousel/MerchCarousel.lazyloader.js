import { __BREAKPOINTS } from "../../../styles/utils/variables"
import React, { useEffect, useState } from "react"
import { MerchCarousel } from "./MerchCarousel"
import { HugoTest } from "./hugo"

export const MerchCarouselLazy = () => {
  const [isMobile, setIsMobile] = useState(true)
  console.log(window?.innerWidth)
  useEffect(() => {
    if (window?.innerWidth >= __BREAKPOINTS.xxs) {
      setIsMobile(false)
    }
  }, [])
  return (
    isMobile ? <>mobile</> : <> <HugoTest />
      <MerchCarousel />
    </>
  )

}