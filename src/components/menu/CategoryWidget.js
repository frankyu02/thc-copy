import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 3px 0px;
    margin-top: -6px;

    .entry{
        font-family: 'MADE Outer Sans Light';
        font-size: 14px;
        text-transform: capitalize;
        margin: 6px 0px;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
            color: var(--darkpurple);
        }
    }
`;

const allCats = {
    FLOWER: [],
    PRE_ROLLS: ["SINGLES", "PACKS", "INFUSED", "BLUNTS"],
    EDIBLES: ["CHOCOLATES", "GUMMIES", "BAKED_GOODS", "DRINKS", "CAPSULES_TABLETS", "DISSOLVABLES"],
    VAPORIZERS: ["CATRIDGES", "PODS", "DISPOSABLES"],
    CONCENTRATES: ["LIVE_RESIN", "SHATTER", "WAX", "ROSIN", "KIEF", "DIAMONDS", "ISOLATE", "INFUSED_FLOWER", "HASH"],
    TINCTURES: ["UNFLAVORED"],
    TOPICALS: ["TOPICAL_OILS", "LOTION", "TRANSDERMALS", "BATH_PRODUCTS", "LIP_BALMS"],
    SEEDS:[],
    CBD:[],
    ACCESSORIES:["BATTERIES", "LIGHTERS", "PAPERS_ROLLING_SUPPLIES", "GRINDERS", "GLASSWARE", "TRAYS", "DAB_TOOLS", "STORAGE_CONTAINERS"]
    }


export default function CategoryWidget({category, subcategory, 
    setCategory, setSubcategory, location}){
    if (!category){
        return(
            <Wrapper data-cy="categories">
                {
                    Object.entries(allCats).map(([key, value]) => {
                        const prettyKey = key.toLowerCase().replace("_", " ")
                        return(
                            <div className="entry" onClick={()=>{setCategory(key, location)}}>
                                {prettyKey}
                            </div>
                        )
                    })
                }
            </Wrapper>
        )
    }else if (allCats[category].length > 0) {
        return(
            <Wrapper data-cy="categories">
                {
                    allCats[category].map((subcat) => {
                        const prettySubcat = subcat.toLowerCase().replaceAll("_", " ")
                        return(
                            <div className="entry" onClick={()=>{setSubcategory(subcat, location)}}>
                                {prettySubcat}
                            </div>
                        )
                    })
                }
            </Wrapper>
        )
    }else{
        return <></>
    }
    
}