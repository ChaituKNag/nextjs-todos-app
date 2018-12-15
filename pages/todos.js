import BasicLayout from "../layouts/basic";
import { Component } from "react";
import TodosList from '../components/todos/TodosList';
import AddTodo from '../components/todos/AddTodo';

class Todos extends Component {
  
    state = {
        todos: []
    }

    addTodo = (title) => {
        this.setState({
            todos: [...this.state.todos, {
                id: Date.now(),
                completed: false,
                title
            }]
        })
    }

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
        })
    }
  
  render() {
    return (
      <BasicLayout>
        <h1>Todos</h1>
        <TodosList todos = {this.state.todos} toggleTodo = {this.toggleTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </BasicLayout>
    );
  }
}

export default Todos;
