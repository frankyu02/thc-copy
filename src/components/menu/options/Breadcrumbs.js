import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    .crumb{
        font-family: "MADE Outer Sans Light";
        text-transform: capitalize;
        &.small{
            font-size: 12px;
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

export default function Breadcrumbs({category, subcategory}){
    const prettyCategory = category.toLowerCase().replace("_","-");
    const prettySubcategory = subcategory.toLowerCase().replace("_","-");;
    return(
        <Wrapper>
            <div className="crumb small">All</div>
            {
                category &&
                <>
                <div className='slash'>/</div>
                <div className={'crumb '+(!subcategory ? 'large' : 'small')}>
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