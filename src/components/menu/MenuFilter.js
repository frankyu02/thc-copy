import React from 'react';
import styled from 'styled-components';
import SingleCheckbox from '../ui/checkbox/SingleCheckbox';
const Wrapper = styled.div`
`;

export default function MenuFilter({
    onSale, setOnSale, location
}){
//Categories/Subcategories
//Format & Size
//On Sale
//THC
//CBD
//Stain Type
//Brand
//Effects
    return(
        <Wrapper>
            <SingleCheckbox 
                checkState={onSale}
                setCheckState={setOnSale}
                label={"On Sale"}
                location={location}
            />
        </Wrapper>
    )
}
