import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginContainer, LoginForm, LinkToRegister } from './LoginPanelStyle';
import { UserContext } from '../../context/UserContext';

export const LoginPanel = () => {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		// realizar peticion a api con datos de formulario

		setUser({
			id: 123,
			token: 'b8324e129123b9djasd9jjkdhf',
			nickname: 'test',
			email: 'test@gmail.com',
		});
		history.push('/trivia');
	};

	return (
		<LoginContainer className="shadow-lg">
			<img src="./assets/panels/login.jpg" alt="login" />
			<LoginForm onSubmit={handleSubmit}>
				<span> Inicia sesión en tu cuenta </span>
				<input
					type="email"
					name="email"
					placeholder="Ingresa tu correo electrónico"
				/>
				<label htmlFor="email"> Correo electrónico </label>

				<input
					type="password"
					name="password"
					placeholder="Ingresa tu contraseña"
				/>
				<label htmlFor="password"> Contraseña </label>

				<button type="submit"> Iniciar sesión </button>
				<LinkToRegister to="/register">
					¿No tienes una cuenta? Click aquí!
				</LinkToRegister>
			</LoginForm>
		</LoginContainer>
	);
};
