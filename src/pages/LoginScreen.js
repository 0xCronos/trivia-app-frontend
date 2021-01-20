import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginPanel } from '../components/LoginPanel/';
import { UserContext } from '../components/UserContext';

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const handleClick = () => {
		setUser({
			id: 123,
			nickname: 'test',
			email: 'test@gmail.com',
		});
		history.push('/trivia');
	};

	return (
		<div className="page mt-5">
			<LoginPanel />

			<button className="btn btn-primary" onClick={() => handleClick()}>
				Fake Login
			</button>
		</div>
	);
};
