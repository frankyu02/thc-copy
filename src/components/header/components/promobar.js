import React from "react"

export const PromoBar = ({ promoText }) => {
  return (
    <div className={"header-alert"}>
      <div className="container">
        {promoText}
      </div>
    </div>
  )
}



