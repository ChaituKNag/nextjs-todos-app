import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';


function TodosList({todos, toggleTodo}) {
    const sortedTodos = [
        ...todos.filter(todo => todo.completed),
        ...todos.filter(todo => !todo.completed)
    ]
    return (
        <Form>
            {
                sortedTodos.map(todo => (
                    <Form.Field key={todo.id}>
                        <Checkbox 
                            label={todo.title} 
                            defaultChecked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                    </Form.Field>
                ))
            }
        </Form>
    );
}

export default TodosList;