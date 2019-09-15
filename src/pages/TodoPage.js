import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, createTodo } from '../store/actions/todoAction';

import TodoList from '../components/todo/TodoList';
import TodoCreate from '../components/todo/TodoCreate';
import { sortByCreatedAtDesc } from '../utils';

class TodoPage extends Component {
    componentDidMount() {
        this.props.fetchTodos(this.props.currentUser._id);
    };

    onCreateTodo = newTodo => {
        this.props.createTodo(this.props.currentUser, newTodo);
    };

    render() {
        return (
            <div>
                <TodoCreate onCreateTodo={this.onCreateTodo} />
                <TodoList todos={this.props.todos.sort(sortByCreatedAtDesc)} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos,
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    fetchTodos,
    createTodo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);