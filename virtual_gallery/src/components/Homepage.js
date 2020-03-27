import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class Homepage extends Component {
	state = {
		categories: [],
		objectsFromCategories: []
	};
	componentDidMount() {
		let categories = this.state.categories;
		fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
			.then((resp) => resp.json())
			.then((data) =>
				this.setState({
					categories: data.departments
				})
			)
			.then(this.fetchAllCategories)
			.then(this.fetchCoverPhotos);
	}
	fetchAllCategories = () => {
		this.state.categories.forEach((category) => {
			fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${category.departmentId}`
			)
				.then((response) => response.json())
				.then((data) =>
					this.setState({
						objectsFromCategories: data
					})
				);
		});
	};
	fetchCoverPhotos = () => {
		console.log(this.state);
		// this.state.objectsFromCategories.forEach((category) => {
		// 	fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${category.objectIDs[0]}`)
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data));
		// 	console.log(category.ObjectIDs);
	};
	// };
	renderCategories = () => {
		let categories = this.state.categories;
		return categories.map((category) => {
			return (
				<Grid.Column key={category.departmentId}>
					<Image
						fluid
						label={{
							as: 'a',
							color: 'blue',
							content: category.displayName,
							icon: 'image',
							ribbon: true
						}}
						src="https://react.semantic-ui.com/images/wireframe/image.png"
					/>
				</Grid.Column>
			);
		});
	};
	render() {
		return (
			<div className="container">
				<Grid columns={3}>{this.renderCategories()}</Grid>;
			</div>
		);
	}
}
