import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { QuestionPanel } from '../QuestionPanel';

const CountDown = styled.span`
	font-size: 64px;
`;

export const Trivia = () => {
	const [countDown, setCountDown] = useState(3);
	const [start, setStart] = useState(false);
	const [ready, setReady] = useState(false);
	const [finished, setFinished] = useState(false);

	useEffect(() => {
		if (start) {
			setTimeout(() => {
				setCountDown(countDown - 1);
				if (countDown === 1) {
					setStart(false);
					setReady(true);
				}
			}, 1000);
		}
	});

	const handleChange = () => {
		console.log('test');
	};

	return (
		<CSSTransition in={true} appear={true} timeout={250} classNames="fade">
			<div className="container text-center mt-5">
				{start ? (
					<CountDown id="countDown" className="h1 d-block">
						{countDown}
					</CountDown>
				) : (
					!ready && (
						<>
							<h1>¡¿Preparado?!</h1>
							<button
								className="btn btn-outline-success"
								onClick={() => {
									setStart(true);
								}}
							>
								Estoy listo!!!
							</button>
						</>
					)
				)}
				{ready && (
					<CSSTransition
						in={true}
						appear={true}
						timeout={250}
						classNames="fade"
					>
						<QuestionPanel />
					</CSSTransition>
				)}
			</div>
		</CSSTransition>
	);
};
