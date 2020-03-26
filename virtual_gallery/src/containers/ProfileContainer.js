import React, { Component } from 'react'
import ProfileBody from '../components/ProfileBody'

export default class ProfileContainer extends Component {

    createCollection = (username, collectionName) => {
        //     fetch("http://localhost:3001/collections", {
        //         method: "POST",
        //         headers: {
        //             Accept:"application/json",
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({category: collectionName, user_id: username})
        //     })
        console.log("hi")
    }
    render() {
        return (
            <div>
                <ProfileBody username={this.props.username} createCollection={this.createCollection("username", "collectionName")} />
            </div>
        )
    }
}
