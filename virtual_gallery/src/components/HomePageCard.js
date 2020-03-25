import React, { Component } from 'react'

import { NewsHeaderCard } from 'react-ui-cards'
import styles from 'react-ui-cards'


export default class HomePageCard extends Component {
    render() {
        let { artPiece } = this.props
        return (

            <div className={styles['card-container']}>

                <NewsHeaderCard href={artPiece.objectID}
                    thumbnail={artPiece.primaryImageSmall}
                    title={artPiece.title}
                    author={artPiece.artistDisplayName}
                    date={artPiece.objectEndDate}
                    tags={[artPiece.classification, () => (<i>{artPiece.culture}</i>)]}>

                </NewsHeaderCard>

            </div>
        )
    }
}
