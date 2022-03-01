import React from 'react'
import styled from 'styled-components'
import SingleCheckbox from './SingleCheckbox'

export default function CheckboxCollection({location, allValues, activeValues, setActiveValues}){
    console.log("allValues, ", allValues)
    //setEffects(arr, value, location, remove=false)
    return(
        <>
            {allValues.map((label) => {
                const isChecked = activeValues ? activeValues.includes(label) : false; 
                console.log("label---->", label);
                const handleCheckState = (value, location) => {
                    setActiveValues(activeValues, label, location, !value)
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
}