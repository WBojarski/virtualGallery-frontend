import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

export default class CollectionItem extends Component {
    render() {
        const collection = this.props.collection
        return (
            <div>
                <Item.Group divided>
                    <Item>
                        <Item.Image size='tiny' src='' />
                        <Item.Content verticalAlign='middle'>{collection.category}</Item.Content>
                    </Item>
                </Item.Group>
            </div>
        )
    }
}
