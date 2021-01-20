import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CategoriesPanel } from '../components/CategoriesPanel/';
import { Trivia } from '../components/Trivia/';
import { UserContext } from '../components/UserContext';

export const TriviaScreen = () => {
	const [category, setCategory] = useState({});
	const [selected, setSelected] = useState(false);
	const { user } = useContext(UserContext);

	return (
		<div className="page">
			{user.id !== undefined ? (
				<CategoriesPanel
					category={category}
					setCategory={setCategory}
					selected={selected}
					setSelected={setSelected}
				/>
			) : (
				<Redirect to="/" />
			)}
			{selected === true && category !== undefined ? (
				<Trivia category={category} />
			) : null}
		</div>
	);
};
