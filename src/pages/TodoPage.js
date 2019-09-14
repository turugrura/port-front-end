import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../stores/actions/todoAction';

import TodoList from '../components/todo/TodoList';
import { sortByCreatedAt } from '../utils';

class TodoPage extends Component {
    componentDidMount() {
        this.props.fetchTodos(this.props.currentUser._id);
    };

    render() {
        if (this.props.todos.length === 0) {
            return (
                <div>Loding todos...</div>
            )
        };

        return (
            <div>
                <TodoList todos={this.props.todos.sort(sortByCreatedAt)} />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos,
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    fetchTodos
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);