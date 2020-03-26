import React, { Component } from 'react';
import ProfileBody from '../components/ProfileBody';

export default class ProfileContainer extends Component {
	render() {
		return (
			<div>
				<ProfileBody username={this.props.username} />
			</div>
		);
	}
}
