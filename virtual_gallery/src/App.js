import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import API from './API.js';
import SignInForm from './containers/SignInForm';
import HomePageCardsContainer from './containers/HomePageCardsContainer';
import ProfileContainer from './containers/ProfileContainer'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: null
		};
	}


	componentDidMount() {
		// If we have a token in localStorage, attempt to use it to validate ourselves against the server
		if (localStorage.token) {
			API.validate(localStorage.token)
				// Pass the username and token the server sends back to signIn
				.then((json) => this.signIn(json.username, json.token));
		}
	}

	signIn = (username, token) => {
		// Set the state of username to be the username the server sent back
		this.setState({
			username
		});
		// Store the token the server sent back in localStorage, which is on the client-side
		localStorage.token = token;
	};

	// Sign the user out by setting the username to null and removing the token key from localStorage
	signOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};

	render() {
		return (
			<div>
				<Router>
					<NavBar username={this.state.username} signOut={this.signOut} />
					<MainContainer />
					<Route exact path="/sign-in" component={() => <SignInForm signIn={this.signIn} />} />
				</Router>
				<ProfileContainer username={this.state.username} />
				<HomePageCardsContainer />

			</div>
		);
	}
}

export default App;
