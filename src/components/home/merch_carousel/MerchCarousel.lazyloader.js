import { __BREAKPOINTS } from "../../../styles/utils/variables"
import React, { Suspense, useEffect, useState } from "react"


export const MerchCarouselLazy = () => {
  const MerchCarouselDesktop = React.lazy(() => import('./desktop'));
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (window?.innerWidth >= __BREAKPOINTS.xxs) {
      setIsMobile(false)
    }
  }, [])
  return (
    isMobile ? <>mobile</> : <Suspense fallback={<div>Загрузка...</div>}> <MerchCarouselDesktop /> </Suspense>


  )

}


