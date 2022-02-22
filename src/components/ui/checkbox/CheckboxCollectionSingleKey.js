import React from 'react'
import styled from 'styled-components'
import SingleCheckbox from './SingleCheckbox'

export default function CheckboxCollectionSingleKey({location, allValues, activeValue, setActiveValue}){
    console.log("allValues, ", allValues)
    //setEffects(arr, value, location, remove=false)
    if (allValues){
        return(
            <>
                {allValues.map((valObj) => {
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
            </>
        )
    }else{
        return<></>
    }
}