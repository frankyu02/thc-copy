import React from 'react';
import styled from 'styled-components';
import CheckboxCollection from '../ui/checkbox/CheckboxCollection';
import SingleCheckbox from '../ui/checkbox/SingleCheckbox';
import AccordItem from '../ui/accord/AccordItem';

const Wrapper = styled.div`
    width: 100%;
`;

const effectLabels = ["CALM",
    "CLEAR_MIND",
    "CREATIVE",
    "ENERGETIC",
    "FOCUSED",
    "HAPPY",
    "INSPIRED",
    "RELAXED",
    "SLEEPY",
    "UPLIFTED"]

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
            <AccordItem title={"Format & Size"} defaultOpen={true}>
            </AccordItem>
            <AccordItem defaultOpen={true}>
                <SingleCheckbox 
                    checkState={onSale}
                    setCheckState={setOnSale}
                    label={"On Sale"}
                    location={location}
                />
            </AccordItem>
            <AccordItem title={"THC"} defaultOpen={true}>
            </AccordItem>
            <AccordItem title={"CBD"} defaultOpen={true}>
            </AccordItem>
            <AccordItem title={"Strain Type"} defaultOpen={true}>
            </AccordItem>
            <AccordItem title={"Brand"} defaultOpen={false}>
            </AccordItem>
            <AccordItem title={"Effects"} defaultOpen={false}>
                <CheckboxCollection
                    location={location}
                    allValues={effectLabels}
                    activeValues={effects}
                    setActiveValues={setEffects}
                />
            </AccordItem>
        </Wrapper>
    )
}
