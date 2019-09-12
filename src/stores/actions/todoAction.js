import myApi from '../../api/port-back-end';
import {
    FETCH_TODO,
    FETCH_TODOS
} from './actionTypes';

const fetchTodo = (userId = '') => async dispatch => {
    let todos = [];
    try {
        todos = await myApi.get(`/users/${userId}/todos`);
        if (todos.status === 200) {
            todos = todos.data.data[0].todos;
        } else {
            todos = [];
        };
    } catch (error) {
        console.log(error);
        todos = [];
    }
    
    dispatch({
        type: FETCH_TODO,
        payload: todos
    });
};

const fetchTodos = () => async dispatch => {
    let todos
    try {
        todos = await myApi.get('/todos');
        if (todos.status === 200) {
            todos = todos.data.data;
        } else {
            todos = [];
        };
    } catch (error) {
        console.log(error);
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