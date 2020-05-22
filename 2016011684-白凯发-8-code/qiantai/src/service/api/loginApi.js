

import axios from "xhr/fetch";

export const register = (data) => {
    return axios.post('/api/users/register', data);
}

export const login = (data) => {
    return axios.post('/api/users/login', data);
}