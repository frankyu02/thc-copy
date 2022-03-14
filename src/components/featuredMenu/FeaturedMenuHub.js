import React, {useEffect, useState, useReducer, useContext} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

//Apollo
import  SPECIALS_QUERY  from '../../apollo/queries/menu_specials.graphql';
import  CUSTOM_SECTION_QUERY  from '../../apollo/queries/menu_custom_section.graphql';
import  STAFF_PICKS_QUERY  from '../../apollo/queries/menu_staff_picks.graphql';
import FeaturedRow from './FeaturedRow';
import Seo from '../layout/Seo';

const PageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-bottom: 50px;

    p {
        width: 45%;
        opacity: 0.6;
        text-align: center;
        font-size: 13px;
        min-width: 300px;

        margin-top: 20px;
        padding-top: 0px;
    }

    p a{
        text-decoration: underline;
        color: var(--darkpurple);
    }
    h1{
        text-align: center;
    }
    h1 i{
        color: var(--darkpurple);
    }

    .menuLinkWrap{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export default function FeaturedMenuHub(){
    const retailerId = "4c9422c5-d248-415b-8a88-0a75822c50e6";

    const specialsNames = ["the huge clearence"]
    const customSectionNames = ["concentrate corner", "510 vapes", "dank PRJs", "drinks",
    "CBD", "PAX pods", "bulk"]
    return(
        <>
            <Seo 
                title={"Curated Menu - THC Cananda"}
                description={`Same day legal cannabis delivery and pick-up in Vancouver. 
                Browse the widest selection of weed in the city and reserve for pick-up today. 
                We carry all types of products including sativa, hybrid and indica flower, 
                concentrates, pre-rolls, edibles, beverages, CBD oil and CBD-dominant product`}
            />
            <PageTitle>
                <h1>THC <i>Curated Menu</i></h1>
                <p>
                    Take a look at our featured products, specials, and other currated collections,
                    or check out our <Link to={'/menu'}>full menu</Link>.
                </p>

                <div className='menuLinkWrap'>
                    <Link to={'/menu'}>
                    <button className='main_button'>
                        Checkout our <u>FULL MENU</u>
                    </button>
                    </Link>
                </div>
            </PageTitle>
            <FeaturedRow title={"staff picks"}
                QUERY={STAFF_PICKS_QUERY}
                variables={{
                    retailerId: retailerId
                }}
            />
            {
                specialsNames.map(name => (
                    <FeaturedRow title={name}
                        QUERY={SPECIALS_QUERY}
                        variables={{
                            retailerId: retailerId,
                            custom_name: name
                        }}
                    />
                ))
            }
            {
                customSectionNames.map(name => (
                    <FeaturedRow title={name}
                        QUERY={CUSTOM_SECTION_QUERY}
                        variables={{
                            retailerId: retailerId,
                            custom_name: name
                        }}
                    />
                ))
            }
            
        </>
    )
}
