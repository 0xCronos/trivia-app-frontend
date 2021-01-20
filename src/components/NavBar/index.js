import React, { useContext } from 'react';
import { Nav, NavBrand, CustomNavLink } from './NavBarStyle'
import { UserContext } from '../UserContext';

export const NavBar = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <Nav className="navbar navbar-light shadow">
            <div className="container-fluid">
                <NavBrand to="/" className="navbar-brand">Trivia App</NavBrand>
                <div className="d-flex">
                    {user.id !== undefined ?
                        <>
                            <CustomNavLink exact activeClassName="active" to="/" className="nav-item nav-link">
                                <img src="./assets/icons/home.svg" width="32px" className="d-block" alt="home"/>
                                <span>Inicio</span>
                            </CustomNavLink>
                            
                            <CustomNavLink exact activeClassName="active" to="/trivia" className="nav-item nav-link">
                                <img src="./assets/icons/trivia.svg" width="32px" className="d-block" alt="trivia"/>
                                <span>Trivia</span>
                            </CustomNavLink>

                            <CustomNavLink exact activeClassName="active" to="/" className="nav-item nav-link" 
                                onClick={()=> setUser({})}
                            >
                                <img src="./assets/icons/exit.svg" width="32px" className="d-block" alt="exit"/>
                                <span>Salir</span>
                            </CustomNavLink>
                        </>
                    :
                        <>
                            <CustomNavLink exact activeClassName="active" to="/" className="nav-item nav-link"> 
                                <img src="./assets/icons/home.svg" width="32px" className="d-block" alt="home"/>
                                <span>Inicio</span>
                            </CustomNavLink>
                        </>
                    }
                </div>
            </div>
        </Nav>
    )
}