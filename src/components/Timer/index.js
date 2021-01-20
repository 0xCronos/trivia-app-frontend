import React, {useEffect } from 'react';
import styled from 'styled-components';

const Time = styled.span`
    background-color: #f6f6f6;
    color: orangered;
    font-weight: 700;
    font-size: 16px;
    padding: 25px;
    border-radius: 50%;
    border: 3px dashed palevioletred;
`

export const Timer = ({counter, setCounter}) => {

	useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1);
        }, 1000);
	});

	return (
        <div className="container pb-5">
            <Time>{counter}s</Time>
        </div>
	);
};