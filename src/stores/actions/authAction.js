import myApi from '../../api/port-back-end';

import {
    SIGN_IN,
    SIGN_UP
} from './actionTypes';

const signIn = ({username, password}) => async dispatch => {
    let user = {};
    try {
        const res = await myApi.post('/users/login', {
            username,
            password
        });
        if (res.status === 200) {
            console.log(res.data)
            user = {
                ...res.data.data,
                token: res.data.token
            }
        } else {
            user = {};
        }
    } catch (error) {
        console.log(error);
        user = {};
    }

    dispatch({
        type: SIGN_IN,
        payload: user
    });
};

const signUp = ({username, password, title}) => async dispatch => {
    let user = {};
    try {
        const res = await myApi.post('/users/login', {
            username,
            password,
            title
        });
        if (res.status === 201) {
            user = {
                ...res.data.data,
                token: res.data.token
            }
        } else {
            user = {};
        }
    } catch (error) {
        console.log(error);
        user = {};
    }

    dispatch({
        type: SIGN_UP,
        payload: user
    });
};

export {
    signIn,
    signUp
}