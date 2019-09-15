import myApi from '../../api/port-back-end';
import {
    FETCH_TODO,
    FETCH_TODOS,
    CREATE_TODO
} from './actionTypes';

const fetchTodo = (userId = '', todoId = '') => async dispatch => {
    let todos = [];
    try {
        const res = await myApi.get(`/users/${userId}/todos/${todoId}`);
        if (res.status === 200) {
            todos = res.data.data[0].todos;
        };
    } catch (error) {
        console.log(error.response);
    };
    
    dispatch({
        type: FETCH_TODO,
        payload: todos
    });
};

const fetchTodos = (userId) => async dispatch => {
    let todos = [];
    try {
        const res = await myApi.get(`/users/${userId}/todos`);
        if (res.status === 200) {
            todos = res.data.data[0].todos;
        };
    } catch (error) {
        console.log(error.response);
    };
    
    dispatch({
        type: FETCH_TODOS,
        payload: todos
    });
};

const createTodo = (currentUser, newTodo) => async dispatch => {
    let todos = [];
    try {
        await myApi.post(`/users/${currentUser._id}/todos`, newTodo, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    } catch (error) {
        console.log(error.response);
    } finally {
        const res = await myApi.get(`/users/${currentUser._id}/todos`);
        if (res.status === 200) {
            todos = res.data.data[0].todos;
        };
    };
    
    dispatch({
        type: CREATE_TODO,
        payload: todos
    });
};

export {
    fetchTodo,
    fetchTodos,
    createTodo
}