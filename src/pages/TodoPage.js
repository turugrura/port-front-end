import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodo, fetchTodos } from '../stores/actions/todoAction';

import TodoList from '../components/todo/TodoList';

class TodoPage extends Component {
    componentDidMount() {
        this.props.fetchTodos();
        // this.props.fetchTodo('5d66a378db07203ef433b520');
    };

    render() {
        if (this.props.todos.length === 0) {
            return (
                <div>Loding todos...</div>
            )
        };

        return (
            <div>
                <TodoList todos={this.props.todos} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
});

const mapDispatchToProps = {
    fetchTodo,
    fetchTodos
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);