import myApi from '../../api/port-back-end';
import {
    GET_ALL_USER
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

export {
    getAllUser
}