import React from "react";
import Select from 'react-select';
import styled from "styled-components";

const selectStyle = {
    control: (provided, state) => ({
        ...provided,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: '#612C8F',
        fontSize: '17px',
        fontFamily: 'Integral CF',
        border: 'none',
        padding: '0',
        background: 'transparent',
    }),
    option: (provided, state) => ({
        ...provided,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        background: '#858787',
        fontFamily: 'Integral CF',
        fontSize: '17px',
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
        fontSize: '17px',
        color: '#612C8F',
        margin: '0',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#612C8F',
        alignItems: 'flex-start',
        padding: '0',
        paddingTop: '2px',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        padding: '0',
        alignItems: 'flex-start',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0',
    }),
}

const Wrapper = styled.div`
    .val {
        color: #612C8F;
        font-size: 17px;
        font-family: 'Integral CF';
    }
`

const Dropdown = ({index, setIndex, variant}) => {
    const varList = variant.map((variant, index) => ({label: variant.option, value: index})) 
    const changeIndex = (e) =>{
        console.log(e);
        setIndex(e.value);
    }
    if(variant?.length === 0){
        return (<></>)
    }
    else if(variant?.length === 1){
        if (variant[0].option !== "N/A") {
            return(
                <Wrapper>
                    <div className="val">&nbsp;/&nbsp;{variant[0].option}</div>
                </Wrapper>
            )
        }
        return (<></>)
    } else{
        return(
            <>  
                <Wrapper>
                    <div className="val">&nbsp;/&nbsp;</div>
                </Wrapper>
                <Select
                    onChange={changeIndex}
                    value={varList[index]}
                    options={varList}
                    styles={selectStyle}
                    defaultValue={varList[0]}
                    isSearchable={false}
                    classNamePrefix="react-select"
                    />
            </>
        )
    }
}

export default Dropdown;