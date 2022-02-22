import React from 'react';
import styled from 'styled-components';
import CheckboxCollection from '../ui/checkbox/CheckboxCollection';
import CheckboxCollectionSingle from '../ui/checkbox/CheckboxCollectionSingle';
import SingleCheckbox from '../ui/checkbox/SingleCheckbox';
import AccordItem from '../ui/accord/AccordItem';
import WeightBlocks from './WeightBlocks';

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

const strainTypeLabels = [
    "INDICA",
    "SATIVA",
    "HYBRID",
    "HIGH_CBD"
]

export default function MenuFilter({
    location, onSale, setOnSale, effects, setEffects, strainType, 
    setStrainType, availWeights, weights, setWeights
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
                <WeightBlocks 
                    availWeights={availWeights}
                    weights={weights}
                    setWeights={setWeights}
                    location={location}
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
            <AccordItem title={"THC"} defaultOpen={true}>
            </AccordItem>
            <AccordItem title={"CBD"} defaultOpen={true}>
            </AccordItem>
            <AccordItem title={"Strain Type"} defaultOpen={true}>
                <CheckboxCollectionSingle
                    location={location}
                    allValues={strainTypeLabels}
                    activeValue={strainType}
                    setActiveValue={setStrainType}
                />
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
