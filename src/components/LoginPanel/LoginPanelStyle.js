import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
	background-color: #f1f1f1;
	border-radius: 3px;
	margin: 0 30% 0 30%;

	/* imagen de arriba */
	& > img {
		width: 100%;
		border-top-right-radius: 3px;
		border-top-left-radius: 3px;
		height: 450px;
	}

	/* contenedor de formulario */
	& > div {
		padding: 30px 40px 30px 40px;

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
			height: 20px;
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
			height: 5vh;
			color: white;
			border: none;
			transition: all 0.2s ease;

			&:hover {
				background-color: transparent;
				border: 1px solid #5b3c8a;
				color: black;
				transition: all 0.2 ease;
			}
		}
	}

	@media (max-width: 1200px) {
		margin: 0 15% 0 15%;
	}

	@media (max-width: 768px) {
		margin: 0 5% 0 5%;
	}
`;

export const LinkToRegister = styled(Link)`
	max-width: 100% !important;
	width: 100% !important;
	text-decoration: none;
	font-size: 13px;

	&:hover {
		color: #111;
	}
`;
