import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImageData } from "../../utils/get_image_data";
import { AgeGateStyles } from "./AgeGate.styled";
import { useNoScroll } from "../../hooks/useNoScroll";
import { LoaderDefault } from "../Loaders/default";


export const AgeGate = () => { 
  const [age, setAge] = useState(0); 
  const [access, setAccess] = useState(null);
  const ageRef = useRef(null);
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
  `);  
  const {
    ageGateMinAge, 
    ageGateTitle, 
    ageGateSubTitle, 
    ageGateButton, 
    ageGateBg, 
    ageGateLogo, 
    ageGateRepeatCheckDelay
  } = query?.wp?.thcwebsiteGeneralOption?.ageGate?.ageGate;

  

  useEffect(() => {
    if (typeof window !== 'undefined') {

      if (localStorage.getItem('access')) {
        const diff = parseInt( ((Date.now() - localStorage.getItem('accessTime')) / (1000 * 60 * 60 * 24)).toFixed(0) ); // get difference from now date and last age accepting

        if (diff >= ageGateRepeatCheckDelay) {
          localStorage.removeItem('access');
          localStorage.removeItem('accessTime');
          localStorage.removeItem('accessAge');
          setAccess(false);
        } else {
          setAccess(true);
        }
      } else {
        setAccess(false);
      }
      
    }
  }, [access]);

  useNoScroll(!access);
  

  

  const accessHandler = () => {
    localStorage.setItem('access', '1');
    localStorage.setItem('accessTime', Date.now());
    localStorage.setItem('accessAge', ageRef.current.value);
    setAccess(true);
  }  

  if (access === null) return <LoaderDefault/>
  if (access) return null;    

  return (
    <AgeGateStyles>
      <div className="inner container">
        <div className="logo">
          <GatsbyImage image={getImageData(ageGateLogo)} alt="logo"/>
        </div>
        <div className="subtitle">{ageGateSubTitle}</div>
        <div className="title">{ageGateTitle}</div>
        <div className="age">{age}</div>
        <input type="range" ref={ageRef} name={age} min="0" max="100" value={age} className="range" onChange={e => setAge(e.target.value)} />
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

