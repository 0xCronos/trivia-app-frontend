import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { HomeScreen } from '../../pages/HomeScreen';
import { TriviaScreen } from '../../pages/TriviaScreen';
import { LoginScreen } from '../../pages/LoginScreen';
import { RegisterScreen } from '../../pages/RegisterScreen';
import { NotFoundScreen } from '../../pages/NotFoundScreen';

import { NavBar } from '../NavBar';

export const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition
							key={location.key}
							timeout={450}
							classNames="fade"
						>
							<Switch location={location}>
								<Route exact path="/" component={HomeScreen} />
								<Route path="/trivia" component={TriviaScreen} />
								<Route path="/login" component={LoginScreen} />
								<Route path="/register" component={RegisterScreen} />
								<Route component={NotFoundScreen} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		</Router>
	);
};
