import axios from 'axios'
import { routers } from 'router/router'
import { message } from 'antd';
//请求拦截 每次http请求都会走这个 
axios.interceptors.request.use(config => {
    if (localStorage.token) {
        //设置统一的请求header
        config.headers.Authorization = localStorage.token;
    }
    return config;
}, error => {
    return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(response => {

    return response;
}, error => {
    //错误提醒
    console.log(error)
    // message.error(error.response.data);
    //获取错误状态码
    const { status } = error.response;
    if (status == 401) {
        Message.error('token失效，请重新登录！');
        //清除token
        localStorage.removeItem('token');
        //跳转到登录页面
        routers.push('/Login');
    }
    return Promise.reject(error);
})
export default axios;
