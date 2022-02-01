import React from "react"


export const HugoTest = () => {
  const text = []
  for (let i = 0; i < 99999; i++) {
    text.push(<p>{i}+text </p>)
  }


  return (
    <>
      {text.map((item, i) => <div key={i}> {item}</div>)}
    </>

  )
}