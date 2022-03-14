import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Range} from 'rc-slider'
import 'rc-slider/assets/index.css';
import './sliderStyle.css';
const Wrapper = styled.div`
    padding: 4px 10px;
`;

const Inputs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input{
        max-width: 50px;
        font-family: 'MADE Outer Sans Light';
        font-size: 13px;
        padding: 4px;
        text-align: center;
        border: 1px solid rgba(0,0,0,0.4);
        border-right: 0px white solid;
    }
    .unit{
        padding: 4px;
        font-size: 13px;
        border: 1px solid rgba(0,0,0,0.4);
        border-left: 0px white solid;
        display: inline-block;

        font-family: 'MADE Outer Sans Light';
    }
    margin-bottom: 5px;
`;

const unitIcon = {
    PERCENTAGE: "%",
    MILLIGRAMS: "mg",
    MILLIGRAMS_PER_GRAM: "mg/g",
    MILLIGRAMS_PER_ML: "mg/mg"
}

export default function Slider({potency, setPotency, unit="PERCENTAGE", location, reset, setReset, id }){
    const [minMax, setMinMax] = useState([0, 50])

    // useEffect(()=>{
    //     console.log("useEffect hit Slider")
    //     if (potency){   
    //         console.log("useEffect hit Slider, potency")
    //         setPotency({min: minMax.min, max: minMax.max, unit: unit})
    //     }
    // },[minMax])
    if(reset){
        setReset(false);
        minMax[0] = 0;
        minMax[1] = 50;
    }

    useEffect(() => {
        if (potency){
            minMax[0] = potency.min;
            minMax[1] = potency.max;
        }else{
            minMax[0] = 0;
            minMax[1] = 50;
        }
    }, [potency])

    var unit = "PERCENTAGE";
    if (category=="EDIBLES"){
        unit = "MILLIGRAMS"
    }

    return(
        <Wrapper>
            <Inputs>
                <div>
                <input 
                    type="text"
                    value={minMax[0]}
                    onChange={(event) => {
                        let newArr = [...minMax];
                        newArr[0] = parseInt(event.target.value) || 0;
                        setMinMax(newArr); 
                    }}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            setPotency({min: parseInt(minMax[0]), 
                                max: parseInt(minMax[1]), 
                                unit: unit,
                                clear: false,
                                location: location
                            });
                        }
                    }}
                    data-cy={(id) + '-left'}
                />
                <div className="unit">{unitIcon[unit]}</div>
                </div>
                <div>
                <input 
                    type="text"
                    value={minMax[1]}
                    onChange={(event) => {
                        let newArr = [...minMax];
                        newArr[1] = parseInt(event.target.value) || 0;
                        setMinMax(newArr);
                    }}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            setPotency({min: parseInt(minMax[0]), 
                                max: parseInt(minMax[1]), 
                                unit: unit,
                                clear: false,
                                location: location
                            });
                        }
                    }}
                    data-cy={(id) + '-right'}
                />
                <div className="unit">{unitIcon[unit]}</div>
                </div>
            </Inputs>
            <Range
                value={minMax}
                onChange={(minMax) => {
                    setMinMax([...minMax]);
                }}
                onAfterChange={(minMax) => {
                    setPotency({min: minMax[0], 
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