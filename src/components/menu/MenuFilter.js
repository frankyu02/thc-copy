import React from 'react';
import styled from 'styled-components';
import CheckboxCollection from '../ui/checkbox/CheckboxCollection';
import CheckboxCollectionSingle from '../ui/checkbox/CheckboxCollectionSingle';
import CheckboxCollectionSingleKey from '../ui/checkbox/CheckboxCollectionSingleKey';
import SingleCheckbox from '../ui/checkbox/SingleCheckbox';
import AccordItem from '../ui/accord/AccordItem';
import WeightBlocks from './WeightBlocks';
import Slider from '../ui/slider/Slider';
import SortDropdown from './SortDropdown';


const Wrapper = styled.div`
    width: 100%;
    position: relative;
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
    setStrainType, availWeights, weights, setWeights, thc, setTHC,
    cbd, setCBD, brand, setBrand, allBrands, reset , setReset, refetch,
    category
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
            <AccordItem title={"Format & Size"} defaultOpen={weights ? true : false} id="WeightBlock">
                <WeightBlocks 
                    availWeights={availWeights}
                    weights={weights}
                    setWeights={setWeights}
                    location={location}
                    refetch={refetch}
                />
            </AccordItem>
            <AccordItem defaultOpen={true} id="SaleBlock">
                <SingleCheckbox 
                    id="sale"
                    checkState={onSale}
                    setCheckState={setOnSale}
                    label={"On Sale"}
                    location={location}
                />
            </AccordItem>
            <AccordItem title={"THC"} defaultOpen={true} id="THCBlock">
                <Slider
                    potency={thc}
                    setPotency={setTHC}
                    location={location}
                    reset={reset}
                    setReset={setReset}
                    category={category}
                    id="THC"
                />
            </AccordItem>
            <AccordItem title={"CBD"} defaultOpen={true} id="CBDBlock">
                <Slider
                    potency={cbd}
                    setPotency={setCBD}
                    location={location}
                    reset={reset}
                    setReset={setReset}
                    category={category}
                    id="CBD"
                />
            </AccordItem>
            <AccordItem title={"Strain Type"} defaultOpen={true} id="StrainBlock">
                <CheckboxCollectionSingle
                    location={location}
                    allValues={strainTypeLabels}
                    activeValue={strainType}
                    setActiveValue={setStrainType}
                />
            </AccordItem>
            <AccordItem title={"Brand"} defaultOpen={(brand ? true : false)} overflowAuto={true} id="BrandBlock">
                <CheckboxCollectionSingleKey
                    location={location}
                    allValues={allBrands}
                    activeValue={brand}
                    setActiveValue={setBrand}
                />
            </AccordItem>
            <AccordItem title={"Effects"} defaultOpen={(effects ? true : false)} id="EffectsBlock">
                <CheckboxCollection
                    location={location}
                    allValues={effectLabels}
                    activeValues={effects}
                    setActiveValues={setEffects}
                    refetch={refetch}
                />
            </AccordItem>
        </Wrapper>
    )
}
