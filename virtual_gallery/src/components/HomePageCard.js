import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { NewsHeaderCard } from 'react-ui-cards';
import styles from 'react-ui-cards';

export default class HomePageCard extends Component {
	postArtPiece(event, artPiece) {
		event.preventDefault();
		this.addArtToCollection(artPiece);
	}
	addArtToCollection(artPiece, collectionid = 1) {
		let object = {
			art_piece_id: artPiece.id,
			collection_id: collectionid
		};
		fetch('http://localhost:3001/art_piece_collections', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(object)
		})
			.then((resp) => resp.json())
			.then((obj) => console.log(obj));
	}
	render() {
		let { artPiece } = this.props;
		return (
			<div className={styles['card-container']}>
				<NewsHeaderCard
					href={artPiece.objectID}
					thumbnail={artPiece.primaryImageSmall}
					title={artPiece.title}
					author={artPiece.artistDisplayName}
					date={
						<Button
							onClick={(event) => this.postArtPiece(event, artPiece)}
							circular
							icon="save outline"
							color="grey"
						/>
					}
					tags={[ artPiece.classification, () => <i>{artPiece.culture}</i> ]}
				/>
			</div>
		);
	}
}
