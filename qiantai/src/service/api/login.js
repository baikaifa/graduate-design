

import { get, post, _delete, put, cancelAxiosToken, cancelAxiosTokenAll } from "xhr/fetch";

export const register = (data) => {
    return post('/api/users/register', data);
}


export const login = (data) => {
    return post('/api/users/login', data);
}