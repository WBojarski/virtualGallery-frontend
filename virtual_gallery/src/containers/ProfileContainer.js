import React, { Component } from 'react';
import ProfileBody from '../components/ProfileBody';
import CollectionItem from '../components/CollectionItem'

export default class ProfileContainer extends Component {

	state = {
		collections: []
	}

	renderCollections() {
		return this.state.collections.map(collection => {
			console.log(collection)
			return <CollectionItem collection={collection} />
		})
	}
	componentDidMount() {
		const userID = 1
		fetch(`http://localhost:3001/users/${userID}`)
			.then(resp => resp.json())
			.then(userInfo => this.setState({
				collections: userInfo.collections
			}))
	}
	render() {

		return (
			<div>
				<ProfileBody username={this.props.username} />
				{this.renderCollections}
			</div>
		);
	}
}
