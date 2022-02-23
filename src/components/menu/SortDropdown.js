import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const selectStyle = {
    control: (provided, state) => ({
        ...provided,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#612C8F',
        fontSize: '13px',
        fontFamily: 'Integral CF',
        padding: '0',
        background: 'transparent',
        border: '2px solid black',
        borderRadius: "0px",
        width: '150px',
        paddingLeft: '5px'
    }),
    option: (provided, state) => ({
        ...provided,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        background: '#858787',
        fontFamily: 'Integral CF',
        fontSize: '13px',
        paddingLeft: '8px',
        margin: '0',
    }),
    menu: (provided, state) => ({
        ...provided,
        margin: '0',
        padding: '0',
        background: '#858787',
        minWidth: '62px',
    }),
    singleValue: (provided) => ({
        ...provided,
        fontFamily: 'Integral CF',
        fontSize: '13px',
        color: '#612C8F',
        margin: '0',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        paddingTop: '0px',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        padding: '0',
        alignItems: 'center',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0',
    }),
}

const options = [
    {label:"NAME ASC" , value: {dir:"ASC" ,key:"NAME"}},
    {label:"NAME DESC" , value: {dir:"DESC" ,key:"NAME"}},
    {label:"POPULAR" , value: {dir:"ASC" ,key:"POPULAR"}},
    {label:"UNPOPULAR" , value: {dir:"DESC" ,key:"POPULAR"}},
    {label:"HIGH PRICE" , value: {dir:"ASC" ,key:"PRICE"}},
    {label:"LOW PRICE" , value: {dir:"DESC" ,key:"PRICE"}},
    {label:"HIGH POTENCY" , value: {dir:"ASC" ,key:"POTENCY"}},
    {label:"LOW POTENCY" , value: {dir:"DESC" ,key:"POTENCY"}}
]

export default function SortDropdown({setSort, sort, location}){
    console.log("SortDropdown, sort-->", sort)

    var sortVal = null;
    if (sort){
        console.log("SortDropdown, Filter sort-->", options.filter((f) => (
            f.value.dir == sort.dir && f.value.key == sort.key
        ))[0])
        sortVal = options.filter((f) => (
            f.value.dir == sort.dir && f.value.key == sort.key
        ))[0]
    }

    return(
        <>
            <Select
                styles={selectStyle}
                isSearchable={false}
                options={options}
                value={sortVal}
                onChange={(value) => {
                    setSort(value.value, location)
                }}
            />
        </>
    )
}