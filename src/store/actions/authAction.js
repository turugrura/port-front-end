import myApi from '../../api/port-back-end';

import {
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT,
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER
} from './actionTypes';

const signIn = ({username, password}) => async dispatch => {
    let user = {};
    try {
        const res = await myApi.post('/users/login', {
            username,
            password
        });
        if (res.status === 200) {
            user = {
                ...res.data.data,
                token: res.data.token
            }
            localStorage.setItem('jwt', user.token);
        };
    } catch (error) {
        console.log(error.response);
        user = {
            ...error.response.data,
            status: error.response.status
        };
    };

    dispatch({
        type: SIGN_IN,
        payload: user
    });
};

const signUp = ({username, password, title}) => async dispatch => {
    let user = {};
    try {
        const res = await myApi.post('/users/signup', {
            username,
            password,
            title
        });
        if (res.status === 201) {
            user = {
                ...res.data.data,
                token: res.data.token
            }
            localStorage.setItem('jwt', user.token);
        };
    } catch (error) {
        console.log(error.response);
        user = {
            ...error.response.data,
            status: error.response.status
        };
    };

    dispatch({
        type: SIGN_UP,
        payload: user
    });
};

const signOut = (currentUser = {}) => async dispatch => {
    try {
        const res = await myApi.post('/users/logout', {}, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
        if (res.status === 200) {
            currentUser = {};
            localStorage.removeItem('jwt');
        };
    } catch (error) {
        console.log(error.response);        
    };

    dispatch({
        type: SIGN_OUT,
        payload: currentUser
    });
};

const setCurrentUser = (token) => async dispatch => {
    let user = {};
    try {
        const res = await myApi.get('/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if (res.status === 200) {
            user = res.data.data[0];
        };
    } catch (error) {
        console.log(error.response);
        localStorage.removeItem('jwt');
        user = {
            ...error.response.data,
            status: error.response.status
        };
    }

    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    });
};

const clearCurrentUser = () => {
    return ({
        type: CLEAR_CURRENT_USER,
        payload: {}
    });
};

export {
    signIn,
    signUp,
    signOut,
    setCurrentUser,
    clearCurrentUser
}