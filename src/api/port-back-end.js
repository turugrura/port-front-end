import axios from 'axios';

export const baseURL = process.env === 'production' ? 'https://evening-dawn-14923.herokuapp.com' : 'http://localhost:3000';
export const urlUsersImage = baseURL + '/img/users'

export default axios.create({
    baseURL
});