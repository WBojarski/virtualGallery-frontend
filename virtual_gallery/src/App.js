import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import API from './API.js';
import HomePageCardsContainer from './containers/HomePageCardsContainer';
import ProfileContainer from './containers/ProfileContainer';

import LoginForm from './components/LoginForm';
import Homepage from './components/Homepage';


import SignInForm from './containers/SignInForm'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: null
		};
	}

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then((json) => this.signIn(json.username, json.token));
		}
	}

	signIn = (username, token) => {
		this.setState({
			username
		});
		localStorage.token = token;
	};

	signOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};

	render() {
		return (
			<div>
				<NavBar username={this.state.username} signOut={this.signOut} />
				{/* <Route exact path="/sign-in" component={SignInForm} /> */}
				<Route exact path="/discover" component={HomePageCardsContainer} />
				<Route exact path="/sign-in" component={LoginForm} />
				<Route exact path="/profile" component={ProfileContainer} />
				<Route exact path="/home" component={Homepage} />
			</div>
		);
	}
}

export default App;
