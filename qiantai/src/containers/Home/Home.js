import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import s from './Home.module.less'
import loadable from 'utils/loadable'//组件懒加载
import { withRouter } from 'react-router';
import { getUser } from 'api/HomeApi'
import { useObserver } from 'mobx-react-lite';
import { useStores } from 'store/index.js';

const HeaderContent = loadable(() => import('./components/HeaderContent/HeaderContent'));
export default withRouter(function Home(props) {
    let store = useStores(); // 获取store
    const { homeStore, themeStore } = store;
    async function authoritation_token() {
        if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'))
            const res = await getUser(localStorage.getItem('token'))
            console.log(res)
            if (res.status == 200) {
                message.info('欢迎你' + res.data.email, 1)
                homeStore.changeIsLogin(true)
            }
        }
    }
    useEffect(() => {
        authoritation_token()
    })
    return useObserver(() => (
        <React.Fragment>
            <HeaderContent className={`${s.header}`}></HeaderContent>
            <div className={`${s.img}`}></div>
        </React.Fragment>
    ))

})
