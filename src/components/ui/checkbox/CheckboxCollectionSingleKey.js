import React, { useState } from 'react'
import styled from 'styled-components'
import SingleCheckbox from './SingleCheckbox'
const Read = styled.p`
    color: var(--darkpurple);
    font-size: 12px;
    margin: 0;
    margin-top: 20px;
    &:hover{
        color: black;
        cursor: pointer;
    }
`
export default function CheckboxCollectionSingleKey({location, allValues, activeValue, setActiveValue}){
    //setEffects(arr, value, location, remove=false)
    const [brandCount, setBrandCount] = useState(10);
    if (allValues){
        return(
            <div className="brands">
                {allValues.slice(0, brandCount).map((valObj) => {
                    const isChecked = (valObj.id === activeValue); 
                    const handleCheckState = (value, location) => {
                        if (value==1){
                            setActiveValue(valObj.id, location)
                        }else if (value==0){
                            setActiveValue("", location)
                        }
                    }
                    return(
                        <SingleCheckbox 
                            checkState={isChecked}
                            setCheckState={handleCheckState}
                            location={location}
                            label={valObj.name}
                        />
                    )
                })}
                {(brandCount < allValues.length) ? 
                <Read onClick={() => {setBrandCount(brandCount + 10)}}>SHOW MORE...</Read>:
                <Read onClick={() => {setBrandCount(10)}}>COLLAPSE</Read>
                }
            </div>
        )
    }else{
        return<></>
    }
}