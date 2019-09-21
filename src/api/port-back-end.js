import axios from 'axios';

export const baseURL = 'http://localhost:3000';
export const urlUsersImage = baseURL + '/img/users'

export default axios.create({
    baseURL
});