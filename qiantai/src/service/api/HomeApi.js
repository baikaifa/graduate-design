import axios from "xhr/fetch";
export const getUser = () => {
    return axios.get('/api/users/current');
}
