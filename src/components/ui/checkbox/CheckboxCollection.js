import React from 'react'
import styled from 'styled-components'
import SingleCheckbox from './SingleCheckbox'

export default function CheckboxCollection({location, allValues, activeValues, setActiveValues, refetch=null}){
    //setEffects(arr, value, location, remove=false)
    return(
        <>
            {allValues.map((label) => {
                const isChecked = activeValues ? activeValues.includes(label) : false; 
                const handleCheckState = (value, location) => {
                    if (refetch){
                        setActiveValues(activeValues, label, location, !value, refetch)
                    }else{
                        setActiveValues(activeValues, label, location, !value)
                    }
                }
                return(
                    <SingleCheckbox 
                        checkState={isChecked}
                        setCheckState={handleCheckState}
                        location={location}
                        label={label}
                    />
                )
            })}
        </>
    )
}