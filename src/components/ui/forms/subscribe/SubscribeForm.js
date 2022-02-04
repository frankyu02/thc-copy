import React, { useContext } from "react"
import { SubscribeFormContext } from "../../../../contexts/subscribe-form"
import { SubscribeFormStyles } from "./SubscribeForm.styled"


export const SubscribeForm = () => {
  const __FORMDATA = useContext(SubscribeFormContext)

  if (!__FORMDATA || __FORMDATA.showForm !== "show") return null

  const {
    signUpFormTitle,
    signUpFormPlaceholdeer,
    signUpFormChechboxText,
    signUpFormButton
  } = __FORMDATA


  return (
    <SubscribeFormStyles>
      <h3>{signUpFormTitle}</h3>
      <form action="#">
        <div className="field">
          <input type="email" name="email" placeholder={signUpFormPlaceholdeer} className="input" required />
        </div>
        <div className="field checkbox">
          <input type="checkbox" id="subscribe_agree" name="agree" required />
          <label htmlFor="subscribe_agree">{signUpFormChechboxText}</label>
        </div>
        <button aria-label={" subscribe "} type="submit"
                className="main_button main_button--purple">{signUpFormButton}</button>
      </form>
    </SubscribeFormStyles>
  )
}