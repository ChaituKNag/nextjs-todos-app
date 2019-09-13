import React from 'react';
import {Input, Form, Segment} from 'semantic-ui-react';

class AddTodo extends React.Component {
    state = {
        todo: ''
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Input transparent placeholder="Add todo.." value={this.state.todo} onChange = { this.handleChange }/>
                    </Form.Field>
                </Form>
            </Segment>
        );
    }
}

export default AddTodo;