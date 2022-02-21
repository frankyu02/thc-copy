import React from 'react';
import styled from 'styled-components';
import CheckboxCollection from '../ui/checkbox/CheckboxCollection';
import SingleCheckbox from '../ui/checkbox/SingleCheckbox';
import AccordItem from '../ui/accord/AccordItem';

const Wrapper = styled.div`
    width: 100%;
`;

export default function MenuFilter({
    location, onSale, setOnSale, effects, setEffects
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
            <AccordItem title={"Effects"} defaultOpen={true}>
                <CheckboxCollection 
                    
                />
            </AccordItem>
            <AccordItem defaultOpen={true}>
                <SingleCheckbox 
                    checkState={onSale}
                    setCheckState={setOnSale}
                    label={"On Sale"}
                    location={location}
                />
            </AccordItem>
        </Wrapper>
    )
}
