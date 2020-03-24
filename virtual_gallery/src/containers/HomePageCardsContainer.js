import React, { Component } from 'react'
import HomePageCard from '../components/HomePageCard'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import styles from '../custom.scss'



export default class HomePageCardsContainer extends Component {

    state = {
        artPieces: []
    }
    selectRandomArtPieces(art) {
        const withPhotos = art.filter(piece => piece.primaryImageSmall.length > 1 && piece.culture.length > 1)
        const shuffled = withPhotos.sort(() => {
            return 0.5 - Math.random()
        })
        const selected = shuffled.slice(0, 100)
        return this.renderArtPieceCards(selected)

    }

    componentDidMount() {
        const artPiecesURL = "http://localhost:3001/art_pieces"
        fetch(artPiecesURL)
            .then(resp => resp.json())
            .then(artPieces => this.setState({
                artPieces: artPieces
            }))

    }

    renderArtPieceCards = (artPieces) => {
        if (artPieces && artPieces.length > 0) {
            return artPieces.map(artPiece => {
                console.log(artPiece)
                return <HomePageCard artPiece={artPiece} />

            })
        }

    }


    render() {
        return (
            <div>
                <Container className="card-container">

                    {this.selectRandomArtPieces(this.state.artPieces)}
                </Container>
            </div>
        )
    }
}



