import myApi from '../../api/port-back-end';
import {
    FETCH_TODO,
    FETCH_TODOS
} from './actionTypes';

const fetchTodo = (userId = '', todoId = '') => async dispatch => {
    let todos = [];
    try {
        const res = await myApi.get(`/users/${userId}/todos/${todoId}`);
        if (res.status === 200) {
            todos = res.data.data[0].todos;
        } else {
            todos = [];
        };
    } catch (error) {
        console.log(error.response);
        todos = [];
    }
    
    dispatch({
        type: FETCH_TODO,
        payload: todos
    });
};

const fetchTodos = (userId) => async dispatch => {
    let todos
    try {
        const res = await myApi.get(`/users/${userId}/todos`);
        if (res.status === 200) {
            todos = res.data.data[0].todos;
        } else {
            todos = [];
        };
    } catch (error) {
        console.log(error.response);
        todos = [];   
    }    
    
    dispatch({
        type: FETCH_TODOS,
        payload: todos
    });
};

export {
    fetchTodo,
    fetchTodos
}