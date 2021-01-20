import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
	background: url('./assets/panels/register.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 3px;
	margin: 0vh 20vw 0 20vw;

	@media (max-width: 1200px) {
		margin: 0 5% 0 5%;
	}

	@media (max-width: 768px) {
		margin: 0 5% 0 5%;
		& > div {
			width: 80%;
		}
	}

	@media (max-width: 480px) {
		margin: 0 5% 0 5%;
	}
`;

export const RegisterForm = styled.form`
	position: relative;
	width: 60%;
	background-color: white;
	margin: 0 0 0 auto;
	padding: 30px 40px 30px 40px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;

	/* texto de panel */
	& > span {
		display: block;
		font-size: 19px;
		margin-bottom: 25px;
		font-weight: 620;
	}

	/* input mail y password */
	& > input {
		width: 100%;
		padding: 5px;
		background-color: inherit;
		border: none;
		border-radius: 0;
		color: black;
		margin: 10px 0px 20px 0px;
		border-bottom: 1px solid black;
		transition: all 0.15s ease;

		&:focus {
			border-bottom: 1px solid #ccc;

			&::placeholder {
				transition: all 0.3s ease;
				opacity: 0;
			}
		}
	}

	& > input:focus + label {
		opacity: 1;
		top: -80px;
	}

	& > label {
		position: relative;
		height: auto;
		left: 0%;
		top: -60px;
		line-height: 15px;
		transition: all 0.1s;
		overflow: hidden;
		color: #111;
		white-space: nowrap;
		z-index: 1;
		opacity: 0;
	}

	/* boton del panel */
	& > button {
		background-color: #5b3c8a;
		width: 100%;
		height: 30px;
		color: white;
		border: none;
		outline: 0;
		transition: all 0.2s ease;

		&:hover {
			background-color: transparent;
			border: 1px solid #5b3c8a;
			color: black;
			transition: all 0.2 ease;
		}
	}
`;

export const LinkToLogin = styled(Link)`
	max-width: 100% !important;
	width: 100% !important;
	text-decoration: none;
	font-size: 13px;

	&:hover {
		color: #111;
	}
`;
