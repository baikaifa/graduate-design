import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import s from './Home.module.less'
import loadable from 'utils/loadable'//组件懒加载
import { withRouter } from 'react-router';
import { getUser } from 'api/HomeApi'
import { observer } from 'mobx-react-lite';
const HeaderContent = loadable(() => import('./components/HeaderContent/HeaderContent'));
export default observer(withRouter(function Home(props) {

    async function authoritation_token() {
        if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'))
            const res = await getUser(localStorage.getItem('token'))
            console.log(res)
            if (res.status == 200) {
                message.info('欢迎你' + res.data.email, 1)
            }
        }
    }
    useEffect(() => {
        // authoritation_token()
        props.history.push('/Test')
    })
    return () => {
        <React.Fragment>
            <HeaderContent className={`${s.header}`}></HeaderContent>
            <div className={`${s.img}`}></div>

        </React.Fragment>
    }
}))
