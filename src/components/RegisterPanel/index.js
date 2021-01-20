import React from 'react';
import { RegisterContainer, LinkToLogin } from './RegisterPanelStyle';

export const RegisterPanel = () => {
	return (
		<RegisterContainer className="shadow-lg">
			<div className="content">
				<span> Registrate ingresando los datos necesarios </span>

				<input
					type="text"
					name="nickname"
					placeholder="Ingresa un nombre de usuario"
				/>
				<label htmlFor="email"> Nombre de usuario </label>

				<input
					type="email"
					name="email"
					placeholder="Ingresa un correo electrónico válido"
				/>
				<label htmlFor="email"> Correo electrónico </label>

				<input
					type="password"
					name="password"
					placeholder="Ingresa tu contraseña"
				/>
				<label htmlFor="password"> Contraseña </label>

				<input
					type="password"
					name="password"
					placeholder="Re-ingresa tu contraseña"
				/>
				<label htmlFor="password">
					{' '}
					Vuelve a ingresar tu contraseña{' '}
				</label>

				<button type="submit"> Registrarse </button>
				<LinkToLogin to="/login">
					¿Ya tienes una cuenta? Click aquí!
				</LinkToLogin>
			</div>
		</RegisterContainer>
	);
};
