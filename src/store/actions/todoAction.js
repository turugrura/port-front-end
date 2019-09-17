import myApi from '../../api/port-back-end';
import {
    FETCH_TODOS,
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from './actionTypes';

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
        await myApi.post(`/todos`, newTodo, {
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

const updateTodo = (currentUser, todoId, newTodo) => async dispatch => {
    let todos = [];
    try {
        await myApi.patch(`/todos/${todoId}`, newTodo, {
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
        type: UPDATE_TODO,
        payload: todos
    });
};

const deleteTodo = (currentUser, todoId) => async dispatch => {
    let todos = [];
    try {
        await myApi.delete(`/todos/${todoId}`, {
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
        type: DELETE_TODO,
        payload: todos
    });
};

export {
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo
}