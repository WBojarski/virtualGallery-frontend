import React from 'react';
import API from '../API';
import { Form, Button } from 'semantic-ui-react'

class SignInForm extends React.Component {
	constructor(props) {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// Send the data from the form to the server in order to authenticate the user
		API.signIn(this.state)
			// The server then responds with the username and a token generated from the user's id to confirm we've been authenticated successfully. We then use the signIn function passed down in props to set the state of username in App to be the username we've been sent back and store the token we've been sent back in localStorage
			.then((json) => this.props.signIn(json.username, json.token));
	};

	render() {
		return (
			<div className="container">
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Username:</label>
						<input type="text" name="username" onChange={this.handleChange} />
						<br />
					</Form.Field>
					<Form.Field>
						<label>Password:</label>
						<input type="password" name="password" onChange={this.handleChange} />
						<br />
					</Form.Field>
					<Button secondary type="submit" value="Sign In" > Sign in  </Button>

				</Form>
			</div>


		);
	}
}

export default SignInForm;
