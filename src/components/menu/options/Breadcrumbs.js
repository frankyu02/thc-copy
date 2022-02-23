import React from 'react';
import styled from 'styled-components'
import { setCategory, setSubcategory, clearAllFilters} from '../../../utils/menu/setFilters';

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    .crumb{
        font-family: "MADE Outer Sans Light";
        text-transform: capitalize;
        &.small{
            font-size: 12px;
            &:hover{
                cursor: pointer;
            }
        }
        &.large{
            font-weight: 900;
            font-size: 20px;
        }
    }
    .slash{
        font-family: "MADE Outer Sans Light";
        opacity: 0.5;
        font-size: 10px;
        padding: 0px 10px;
    }
`;

export default function Breadcrumbs({category, subcategory, location}){
    const prettyCategory = category ? category.toLowerCase().replace("_","-") : "";
    const prettySubcategory = subcategory ? subcategory.toLowerCase().replace("_","-") : "";

    if(!category && !subcategory){
        return(
            <Wrapper>
            <div className="crumb small" onClick={()=>{clearAllFilters()}}>All</div>
            <div className='slash'>/</div>
            <div className='crumb large'>All Products</div>
            </Wrapper>
        )
    }else{
        return(
            <Wrapper>
                <div className="crumb small"
                    onClick={()=>{clearAllFilters()}}>
                        All
                </div>
                {
                    category &&
                    <>
                    <div className='slash'>/</div>
                    <div className={'crumb '+(!subcategory ? 'large' : 'small')}
                        onClick={()=>{setSubcategory("",location)}}>
                        {prettyCategory}
                    </div>
                    </>
                }
                {
                    subcategory &&
                    <>
                    <div className='slash'>/</div>
                    <div className='crumb large'>
                        {prettySubcategory}
                    </div>
                    </>
                }
            </Wrapper>
        )
    }
}