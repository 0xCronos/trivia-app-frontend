import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
	background-color: #5b3c8a;
	color: #f6f6f6;
	padding: 20px 0 20px 0;
`;

export const CustomLink = styled(Link)`
	background-color: transaprent;
	color: white;
	transition: all 0.2s ease;
	margin-right: 5px;
	border-radius: 0;
	border: 1px solid white;
	text-decoration: none;
	padding: 8px;

	&:hover {
		background-color: white;
		color: black;
		transition: all 0.2 ease;
		border: 1px solid transparent;
	}
`;
