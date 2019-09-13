import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodo, fetchTodos } from '../stores/actions/todoAction';

import TodoList from '../components/todo/TodoList';

class TodoPage extends Component {
    componentDidMount() {
        if (!this.props.currentUser.token) {
            return this.props.history.push('/');
        };
        
        this.props.fetchTodos();
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
    todos: state.todoReducer.todos,
    currentUser: state.authReducer.currentUser
});

const mapDispatchToProps = {
    fetchTodo,
    fetchTodos
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);