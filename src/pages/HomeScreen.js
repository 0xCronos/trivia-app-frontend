import React, { useContext } from 'react';

import { Header } from '../components/Header/';
import { UserContext } from '../context/UserContext';

import { Footer } from '../components/Footer';

export const HomeScreen = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="page">
			{!user.token ? <Header /> : null}
			{/* 
            <hr />

            <pre className="container">
                { JSON.stringify(user, null, 3)}
            </pre> */}

			<h1>Home page!</h1>
			
			<Footer />
		</div>
	);
};
