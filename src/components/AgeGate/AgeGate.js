import React, { useEffect, useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getImageData } from "../../utils/get_image_data"
import { AgeGateStyles } from "./AgeGate.styled"
import { useNoScroll } from "../../hooks/useNoScroll"


export const AgeGate = () => {
  const query = useStaticQuery(graphql`
    query AgeGate  {
      wp(thcwebsiteGeneralOption: {}) {
        thcwebsiteGeneralOption {
          ageGate {
            ageGate {
              ageGateTitle
              ageGateSubTitle
              ageGateProvince {
                ageGateProvinceItem
              }
              ageGateLogo {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              ageGateButton {
                url
                target
                title
              }
              ageGateBg {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              ageGateMinAge
              ageGateRepeatCheckDelay
            }
          }
        }
      }
    }
  `)
  const { ageGateRepeatCheckDelay } = query?.wp?.thcwebsiteGeneralOption?.ageGate?.ageGate
  const [access, setAccess] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("accessTime")) {
        const diff = parseInt(((Date.now() - localStorage.getItem("accessTime")) / (1000 * 60 * 60 * 24)).toFixed(0)) // get difference from now date and last age accepting
        if (diff >= ageGateRepeatCheckDelay) {
          localStorage.removeItem("accessTime")
        } else {
          setAccess(true)
        }
      }
    }
  }, [ageGateRepeatCheckDelay])

  return <AgeForm setAccess={setAccess} access={access} query={query} />
}


const AgeForm = ({ query, access, setAccess }) => {
  const [age, setAge] = useState(0)

  const ageRef = useRef(null)

  const {
    ageGateMinAge,
    ageGateTitle,
    ageGateSubTitle,
    ageGateButton,
    ageGateBg,
    ageGateLogo
  } = query?.wp?.thcwebsiteGeneralOption?.ageGate?.ageGate


  const accessHandler = () => {
    localStorage.setItem("accessTime", Date.now())
    setAccess(true)
  }

  useNoScroll(!access)


  return (
    <AgeGateStyles access={access}>
      <div className="bg">
        <GatsbyImage image={getImageData(ageGateBg)} loading="eager" alt="background" />
      </div>
      <div className="inner container">
        <div className="logo">
          <GatsbyImage image={{ ...getImageData(ageGateLogo), backgroundColor: "transparent" }} loading="eager"
                       alt="logo" />
        </div>
        <div className="subtitle">{ageGateSubTitle}</div>
        <div className="title">{ageGateTitle}</div>
        <div className="age">{age}</div>
        <label style={{ display: "none" }} htmlFor="ageInput"> age input </label>
        <input type="range" id={"ageInput"} ref={ageRef} name={age} min="0" max="100" value={age} className="range"
               onChange={e => setAge(e.target.value)} />
        <button
          className="main_button"
          disabled={age < ageGateMinAge}
          onClick={accessHandler}
        >
          {ageGateButton.title}
        </button>
      </div>
    </AgeGateStyles>
  )
}