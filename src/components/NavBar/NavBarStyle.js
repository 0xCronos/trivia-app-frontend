import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: transparent;
	border-bottom: 1px solid #cccccc;
`;

export const NavBrand = styled(NavLink)`
	font-weight: 500;
	font-size: 32px;
	color: #5b3c8a !important;
	/* font-family: 'Ceviche One', cursive; */
`;

export const CustomNavLink = styled(NavLink)`
	font-size: 14px;
	font-weight: 400;
	color: #111;
	transition: all 0.1s ease;

	&:hover {
		background-color: transparent;
		font-weight: 700;
		color: #5b3c8a;
	}
`;
