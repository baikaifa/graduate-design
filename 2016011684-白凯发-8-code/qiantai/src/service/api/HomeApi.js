import axios from "xhr/fetch";
export const getUser = () => {
    return axios.get('/api/users/current');
}
export const storage_this_time = (time) => {
    return axios.post('api/users/this_time', time)
}
export const getLastTime = () => {
    return axios.get('api/users/this_time')
}


