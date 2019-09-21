import myApi from '../../api/port-back-end';

import {
    SIGN_IN,
    SIGN_UP,
    SIGN_OUT,
    SET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    CHANGE_PASSWORD_CURRENT_USER,
    CLEAR_ERROR_CURRENT_USER
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
            window.localStorage.setItem('jwt', user.token);
        };
    } catch (error) {
        console.log(error.response);
        user.error = error.response.data.message;
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
            window.localStorage.setItem('jwt', user.token);
        };
    } catch (error) {
        console.log(error.response);
        user.error = error.response.data.message;
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
            window.localStorage.removeItem('jwt');
        };
    } catch (error) {
        console.log(error.response);
        currentUser.error = error.response.data.message;
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
        window.localStorage.removeItem('jwt');
        user.error = error.response.data.message;
    }

    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    });
};

const updateCurrentUser = (currentUser, userUpdated) => async dispatch => {
    let user = {};
    try {
        if (userUpdated.image !== '') {
            const fd = new FormData();
            fd.append('image', userUpdated.image);

            const res = await myApi.patch('/users/me', fd, {
                headers: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
            if (res.status !== 200) {
                throw new Error('Error occur when uploading image.');
            }
        };        

        delete userUpdated.image;
        const res = await myApi.patch('/users/me', userUpdated, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
        
        if (res.status === 200) {
            user = res.data.data;
            user.token = currentUser.token;
        };
    } catch (error) {
        console.log(error.response);
        user = currentUser;
        user.error = error.response.data.message;
    };

    dispatch({
        type: UPDATE_CURRENT_USER,
        payload: user
    });
};

const changePasswordCurrentUser = (currentUser, password) => async dispatch => {
    let user = {
        ...currentUser
    };
    try {
        const res = await myApi.patch('/users/me/changepassword', password, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
        
        if (res.status === 200) {
            user = res.data.data;
            user.token = res.data.token;
            window.localStorage.setItem('jwt', user.token);
        };
    } catch (error) {
        console.log(error.response);
        user.error = error.response.data.message;
    };

    dispatch({
        type: CHANGE_PASSWORD_CURRENT_USER,
        payload: user
    });
};

const clearErrorCurrentUser = (currentUser) => {
    delete currentUser.error;

    return ({
        type: CLEAR_ERROR_CURRENT_USER,
        payload: currentUser
    });
};

export {
    signIn,
    signUp,
    signOut,
    setCurrentUser,
    updateCurrentUser,
    changePasswordCurrentUser,
    clearErrorCurrentUser
}