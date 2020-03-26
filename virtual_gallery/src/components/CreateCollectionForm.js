import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class CreateCollectionForm extends Component {
	handleSubmit(e) {
		e.preventDefault();
		let obj = {
			category: e.target.category.value,
			user_id: 1
		};
		this.postCollection(obj);
	}
	postCollection(obj) {
		fetch('http://localhost:3001/collections', {
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(obj)
		}).then((resp) => console.log(resp));
	}
	render() {
		return (
			<div>
				<Form onSubmit={(e) => this.handleSubmit(e)}>
					<Form.Field>
						<label>Collection Name</label>
						<input placeholder="Enter collection name" name="category" />
					</Form.Field>

					<Button type="submit" value="Submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
