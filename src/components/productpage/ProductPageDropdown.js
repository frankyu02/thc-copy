import React from "react";
import Select from 'react-select';
import styled from "styled-components";
import { __BREAKPOINTS } from "../../styles/utils/variables";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    p{
        margin: 0;
    }
    .subtitle{
        font-size: 14px;
        font-family: "Integral CF";
        color: #797979;
    }
    .val{
        height: 40px;
        display: flex;
        padding-left: 11px;
        margin-top: 10px;
        align-items: center;
        background: white;
        font-size: 14px;
        font-family: "Integral CF Bold";
        color: #612C8F;
        border: 1px solid black;
    }
    @media (max-width: ${__BREAKPOINTS.sm}px){
       
    }
    .react-select__option{
        @media (max-width: ${__BREAKPOINTS.sm}px){
            font-size: 18px;
        }
    }
    .react-select__control{
        @media (max-width: ${__BREAKPOINTS.sm}px){
            height: 44px;
        }
    }
    .react-select__single-value{
        @media (max-width: ${__BREAKPOINTS.sm}px){
            font-size: 18px;
        }
    }
`;
const selectStyle = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        height: '40px',
        marginTop: '10px',
        background: 'white',
        color: '#612C8F',
        fontSize: '14px',
        fontFamily: 'Integral CF Bold',
        borderRadius: '0',
        border: '1px solid black',
        boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? '1px solid black' : '1px solid black'
         }
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : '#612C8F',
        display: 'flex',
        alignItems: 'center',
        background: state.isSelected ? '#612C8F' : 'white',
        fontFamily: 'Integral CF Bold',
        fontSize: '14px',
        paddingLeft: '11px',
        margin: '0',
    }),
    menu: (provided, state) => ({
        ...provided,
        margin: '0',
        padding: '0',
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
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#612C8F',
        '&:hover': {
            color: state.isFocused ? '#612C8F' : '#612C8F'
         }
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
}
export default function ProductDropdown({ index, setIndex, variant }){
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
                <p className="subtitle">WEIGHT</p>
                <div className="val">{variant[0].option}</div>
            </Wrapper>
        )
    } else{
        return(
            <Wrapper>
                <p className="subtitle">WEIGHT</p>
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
