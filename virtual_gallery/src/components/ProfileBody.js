import React, { Component } from 'react'
import CreateCollectionForm from './CreateCollectionForm'
export default class ProfileBody extends Component {
    state = {
        formVisible: false,
        collectionName: ""
    }

    setFormVisible = () => {
        this.setState({
            formVisible: !this.state.formVisible
        })
    }

    setCollectionName = (e) => {
        this.setState({
            collectionName: e.target.value
        })
    }


    render() {
        return (
            <div>
                <button className="ui inverted grey button" onClick={this.setFormVisible}> Create a collection</button>
                {this.state.formVisible && (<CreateCollectionForm handleSubmit={this.props.handleSubmit} />)}
            </div>
        )
    }
}
