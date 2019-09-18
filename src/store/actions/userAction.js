import myApi from '../../api/port-back-end';
import {
    GET_ALL_USER,
    UPDATE_USER_BY_ADMIN
} from './actionTypes';

const getAllUser = () => async dispatch => {
    let users = [];
    try {
        const res = await myApi.get('/users');
        if (res.status === 200) {
            users = res.data.data
        };
    } catch (error) {
        console.log(error.response)
    };

    dispatch({
        type: GET_ALL_USER,
        payload: users
    });
};

const updateUserByAdmin = (currentUser, user) => async dispatch => {
    let users = [];
    try {
        await myApi.patch(`/users/${user._id}`, user, {
            headers: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    } catch (error) {
        console.log(error.response)
    } finally {
        const res = await myApi.get('/users');
        if (res.status === 200) {
            users = res.data.data
        };
    };

    dispatch({
        type: UPDATE_USER_BY_ADMIN,
        payload: users
    });
};

export {
    getAllUser,
    updateUserByAdmin
}