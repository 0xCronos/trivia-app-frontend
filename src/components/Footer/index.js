import React from 'react'

// import React, { useContext } from 'react';
import styled from 'styled-components';

// import { UserContext } from '../../context/UserContext';

const FooterContainer = styled.footer`
	flex-shrink: 0;
	text-align: center;
	background-color: gray;
	color: white;
`;

export const Footer = () => {
	// const { user, setUser } = useContext(UserContext);

	return (
		<FooterContainer>
			Realizado por Manuel y Diego © 2021
		</FooterContainer>
	);
};