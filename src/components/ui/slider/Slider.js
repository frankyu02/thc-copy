import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Range} from 'rc-slider'
import 'rc-slider/assets/index.css';

const Wrapper = styled.div`
    padding: 4px 10px;
`;

export default function Slider({thc, setTHC, unit="PERCENTAGE", location}){
    const [minMax, setMinMax] = useState([0, 50])

    // useEffect(()=>{
    //     console.log("useEffect hit Slider")
    //     if (thc){   
    //         console.log("useEffect hit Slider, thc")
    //         setTHC({min: minMax.min, max: minMax.max, unit: unit})
    //     }
    // },[minMax])

    return(
        <Wrapper>
            <Range
                value={minMax}
                onChange={(minMax) => {
                    setMinMax([...minMax]);
                }}
                onAfterChange={(minMax) => {
                    setTHC({min: minMax[0], 
                        max: minMax[1], 
                        unit: unit,
                        clear: false,
                        location: location
                    });
                }}
                min={0}
                max={50}
                railStyle={{
                    background: '#B1B2B3',
                    height: '2px',
                }}
                trackStyle={[
                {
                    backgroundColor: 'var(--darkpurple)',
                },
                ]}
                handleStyle={[
                    {
                        borderWidth: '3px',
                        borderColor: 'var(--darkpurple)',
                        backgroundColor: 'var(--darkpurple)',
                        marginTop:'-6px',
                        height: '15px',
                        width: '15px',
                    },
                    {
                        borderWidth: '3px',
                        borderColor: 'var(--darkpurple)',
                        backgroundColor: 'var(--darkpurple)',
                        marginTop:'-6px',
                        height: '15px',
                        width: '15px',
                    },
                ]}
            />
        </Wrapper>
    )
}