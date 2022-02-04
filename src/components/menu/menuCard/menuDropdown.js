import React from "react";
import Select from 'react-select';
import styled from "styled-components";

const selectStyle = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        height: '40px',
        marginTop: '3px',
        background: 'white',
        color: '#612C8F',
        fontSize: '14px',
        fontFamily: 'Integral CF Bold',
        borderRadius: '0',
        border: '1px solid black',
    }),
    option: (provided, state) => ({
        ...provided,
        color: '#612C8F',
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        fontFamily: 'Integral CF Bold',
        fontSize: '14px',
        paddingLeft: '11px',
        margin: '0',
    }),
    menu: (provided, state) => ({
        ...provided,
        margin: '0',
        borderRadius: '0',
        width: '100%',
        background: 'white',
        color: '#612C8F',
        fontFamily: 'Integral CF Bold',
    }),
    singleValue: (provided) => ({
        ...provided,
        fontFamily: 'Integral CF Bold',
        fontSize: '14px',
        color: '#612C8F',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#612C8F',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
}

const Wrapper = styled.div``

const Dropdown = ({index, setIndex, variant}) => {
    const varList = variant.map((variant, index) => ({label: variant.option, value: index})) 
    const changeIndex = (e) =>{
        console.log(e);
        setIndex(e.value);
    }
    if(variant?.length === 0){
        return (<Wrapper></Wrapper>)
    }
    else if(variant?.length === 1){
        return(
            <Wrapper>
                <div className="val">{variant[0].option}</div>
            </Wrapper>
        )
    } else{
        return(
            <Wrapper>
                <Select
                    onChange={changeIndex}
                    value={varList[index]}
                    options={varList}
                    styles={selectStyle}
                    defaultValue={varList[0]}
                    isSearchable={false}
                    classNamePrefix="react-select"
                    />
            </Wrapper>
        )
    }
}

export default Dropdown;