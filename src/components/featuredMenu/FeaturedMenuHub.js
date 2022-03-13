import React, {useEffect, useState, useReducer, useContext} from 'react';
import styled from 'styled-components';

//Apollo
import  SPECIALS_QUERY  from '../../apollo/queries/menu_specials.graphql';
import  CUSTOM_SECTION_QUERY  from '../../apollo/queries/menu_custom_section.graphql';
import  STAFF_PICKS_QUERY  from '../../apollo/queries/menu_staff_picks.graphql';
import FeaturedRow from './FeaturedRow';

export default function FeaturedMenuHub(){
    const retailerId = "4c9422c5-d248-415b-8a88-0a75822c50e6";

    const specialsNames = ["the huge clearence"]
    const customSectionNames = ["concentrate corner", "510 vapes", "dank PRJs", "drinks",
    "CBD", "PAX pods", "bulk"]
    return(
        <>
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