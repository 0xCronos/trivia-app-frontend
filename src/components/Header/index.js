import React from 'react';
import { HeaderContainer, CustomLink } from './HeaderStyle';

export const Header = () => {
	return (
		<HeaderContainer className="content shadow">
			<h3 className="text-center">
				¿Aún no tienes una cuenta? Crea una ahora mismo!
			</h3>
			<div className="container text-center mt-4">
				<CustomLink to="/login"> Ya tengo una cuenta </CustomLink>
				<CustomLink to="/register"> Quiero registrarme </CustomLink>
			</div>
		</HeaderContainer>
	);
};
