import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Circle = styled.div`
    border: 3px dashed palevioletred;
    border-radius: 50%;
    color: orangered;
    padding: 50px;
// `

const Time = styled.span`
    position: absolute;
    top: 58%;
    bottom : 0;
    left: 10%;
    right: 10%;
    text-align: center;
    font-size: 18px;
`

export const Timer = () => {

    const [counter, setCounter] = useState(0);
    // set start to true to run the timer
    const [start, setStart] = useState(false);

	useEffect(() => {
        if(!start){
            setTimeout(() => {
                setCounter(counter + 1);
            }, 1000);
        }
	});

	return (
        <div className="d-flex justify-content-center mt-5">
            <Circle>
                <Time>{counter.toString()} s</Time>
            </Circle>
        </div>
	);
};