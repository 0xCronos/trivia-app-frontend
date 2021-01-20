import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { Ranking } from '../Ranking/';

const CategoryContainer = styled.div`
	background-color: white;
	padding: 20px;
	margin: 0 30vw 0 30vw;
	border-radius: 3px;

	@media (max-width: 1200px) {
		margin: 0 15% 0 15%;
	}

	@media (max-width: 768px) {
		margin: 0 5% 0 5%;
	}
`;

const CategoryButton = styled.button`
	background-color: #5b3c8a;
	width: 100%;
	height: 30px;
	color: white;
	border: none;
	outline: 0;
	transition: all 0.2s ease;
	margin-bottom: 20px;

	&:hover {
		background-color: transparent;
		border: 1px solid #5b3c8a;
		color: black;
		transition: all 0.2 ease;
	}
`;

const LinkToTrivia = styled(Link)`
	text-decoration: none;
`;

export const Category = ({ category, setStartTrivia }) => {
	const handleClick = () => {
		setStartTrivia(true);
	};

	return (
		<CSSTransition in={true} appear={true} timeout={300} classNames="fade">
			<CategoryContainer className="content shadow-lg my-5">
				<LinkToTrivia to="/trivia" className="mx-2">
					Volver
				</LinkToTrivia>
				<h1>Trivia de {category.name.toLowerCase()}</h1>
				<img
					src={category.img}
					className="img-fluid rounded"
					alt={category.name}
				/>
				<div className="pt-2">
					<h3>Acerca de la trivia</h3>
					<p>{category.description}</p>
				</div>
				<hr />
				<Ranking />

				<CategoryButton value={category._id} onClick={handleClick}>
					Comenzar
				</CategoryButton>
			</CategoryContainer>
		</CSSTransition>
	);
};
