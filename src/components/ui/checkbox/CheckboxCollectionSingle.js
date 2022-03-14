import React from 'react'
import styled from 'styled-components'
import SingleCheckbox from './SingleCheckbox'

export default function CheckboxCollectionSingle({location, allValues, activeValue, setActiveValue}){
    //setEffects(arr, value, location, remove=false)
    if(allValues){
        return(
            <>
                {allValues.map((label) => {
                    const isChecked = (label === activeValue); 
                    const handleCheckState = (value, location) => {
                        if (value==1){
                            setActiveValue(label, location)
                        }else if (value==0){
                            setActiveValue("", location)
                        }
                    }
                    return(
                        <SingleCheckbox 
                            checkState={isChecked}
                            setCheckState={handleCheckState}
                            location={location}
                            label={label}
                            id={label}
                        />
                    )
                })}
            </>
        )
    }else{
        return<></>
    }
}