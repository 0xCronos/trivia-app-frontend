import React from 'react'

import { LoginContainer, LinkToRegister } from './LoginPanelStyle'

export const LoginPanel = () => {
    return (
        <LoginContainer className="shadow-lg">
            <img src="./assets/panels/login.jpg" alt="login"/>
            <div>
                <span> Inicia sesión en tu cuenta </span>
                <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
                <label htmlFor="email"> Correo electrónico </label>

                <input type="password" name="password" placeholder="Ingresa tu contraseña" />
                <label htmlFor="password"> Contraseña </label>
               
                <button type="submit"> Iniciar sesión </button>
                <LinkToRegister to="/register">¿No tienes una cuenta? Click aquí!</LinkToRegister>
            </div>
        </LoginContainer>
    )
}