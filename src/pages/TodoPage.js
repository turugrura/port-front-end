import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../store/actions/todoAction';

import TodoList from '../components/todo/TodoList';
import TodoCreate from '../components/todo/TodoCreate';
// import Todo from '../components/todo/Todo';
import { sortByCreatedAtDesc } from '../utils';

class TodoPage extends Component {
    componentDidMount() {
        this.props.fetchTodos(this.props.currentUser._id);
    };

    onCreateTodo = newTodo => {
        this.props.createTodo(this.props.currentUser, newTodo);
    };

    onUpdateTodo = (todoId, newTodo) => {
        this.props.updateTodo(this.props.currentUser, todoId, newTodo);
    };

    onDeleteTodo = todoId => {
        this.props.deleteTodo(this.props.currentUser, todoId);
    };

    render() {
        return (
            <div>
                <TodoCreate onCreateTodo={this.onCreateTodo} />
                <TodoList
                    todos={this.props.todos.sort(sortByCreatedAtDesc)}
                    currentUser={this.props.currentUser}
                    onUpdateTodo={this.onUpdateTodo}
                    onDeleteTodo={this.onDeleteTodo}
                />
                {/* { this.renderTodoList() } */}
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
    createTodo,
    updateTodo,
    deleteTodo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage);