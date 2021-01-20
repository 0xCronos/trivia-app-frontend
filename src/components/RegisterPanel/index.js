import React from 'react';
import { 
	RegisterContainer,
	RegisterForm,
	LinkToLogin,
} from './RegisterPanelStyle';

export const RegisterPanel = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Working!");
	}

	return (
		<RegisterContainer className="shadow-lg">
			<RegisterForm onSubmit={handleSubmit}>
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
					Reingresa tu contraseña
				</label>

				<button type="submit"> Registrarse </button>
				<LinkToLogin to="/login">
					¿Ya tienes una cuenta? Click aquí!
				</LinkToLogin>
			</RegisterForm>
		</RegisterContainer>
	);
};
