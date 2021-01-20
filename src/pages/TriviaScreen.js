import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { CategoriesPanel } from '../components/CategoriesPanel/';
import { Trivia } from '../components/Trivia';
import { Category } from '../components/Category';
import { UserContext } from '../context/UserContext';

export const TriviaScreen = () => {
	const [category, setCategory] = useState({});
	const [selected, setSelected] = useState(false);
	const [startTrivia, setStartTrivia] = useState(false);
	const { user } = useContext(UserContext);

	return (
		<div className="page">
			{user.token ? (
				<CategoriesPanel
					category={category}
					setCategory={setCategory}
					selected={selected}
					setSelected={setSelected}
				/>
			) : (
				<Redirect to="/" />
			)}


			{selected === true ?
				startTrivia === true ? 
					<Trivia />
				: 
				(
					<Category
						category={category}
						setStartTrivia={setStartTrivia}
					/>
				)
			: 
				null
			}
		</div>
	);
};
