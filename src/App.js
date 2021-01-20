import React, { useState } from 'react';
import { UserContext } from './context/UserContext';
import { AppRouter } from './components/AppRouter';

export const App = () => {
	const [user, setUser] = useState({});
	
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
			>
			<AppRouter />
		</UserContext.Provider>
	);
};

// TODO: Finalizar ranking
// TODO: Añadir al final del ranking la posicion actual del usuario en dicha categoria
// TODO: Crear sistema de quizz
// TODO: Crear Timer
// TODO: Mejorar y completar Trivia
// TODO: Crear footer
// TODO: Crear landingpage
// TODO: Añadir transiciones a todo lo que produzca sombra
// TODO: Solo si hay tiempo => Crear Recuperar contraseña
// TODO: Refactorizar estilos para minimizar el codigo
// TODO: Buscar imagenes para las categorias acorde al estilo
// TODO: Refactorizar todo para mostrarle los resultados al tio Hola mundo <3
