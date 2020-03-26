import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import API from './API.js';
import HomePageCardsContainer from './containers/HomePageCardsContainer';
import ProfileContainer from './containers/ProfileContainer';

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
				<Route exact path="/discover" component={HomePageCardsContainer} />
				<Route exact path="/profile" component={ProfileContainer} />
			</div>
		);
	}
}

export default App;
