import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class CreateCollectionForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={() => this.props.handleSubmit}>
                    <Form.Field>
                        <label>Collection Name</label>
                        <input placeholder='Enter collection name' name="collectionName" />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}
