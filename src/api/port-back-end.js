import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'production' ? 'https://tong-app-back.herokuapp.com' : 'http://localhost:3000';
export const urlUsersImage = baseURL + '/img/users'

export default axios.create({
    baseURL
});