import React from 'react';
import { PortalContainer, CustomLink } from './PortalStyle';

export const Portal = () => {
	return (
		<PortalContainer className="content shadow">
			<h3 className="text-center">
				¿Aún no tienes una cuenta? Crea una ahora mismo!
			</h3>
			<div className="container text-center mt-4">
				<CustomLink to="/login"> Ya tengo una cuenta </CustomLink>
				<CustomLink to="/register"> Quiero registrarme </CustomLink>
			</div>
		</PortalContainer>
	);
};
