import React, {useState} from 'react';

import { Timer } from '../Timer';

export const QuestionPanel = () => {

    // tiempo
    const [counter, setCounter] = useState(0);

	return (
		<div className="container border rounded py-5">
			<Timer 
                counter={counter}
                setCounter={setCounter}
            />
			<h1 className="mb-5">Pregunta 1</h1>
			<p>Alternativa A</p>
			<p>Alternativa B</p>
			<p>Alternativa C</p>
			<p>Alternativa D</p>
			<p>Alternativa E</p>
            <button className="btn btn-outline-success">Siguiente</button>
		</div>
	);
};
