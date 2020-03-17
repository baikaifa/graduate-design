import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import loadable from 'utils/loadable'//组件懒加载
import { withRouter } from 'react-router';
import { getUser, storage_this_time, getLastTime } from 'api/HomeApi'
import { useObserver } from 'mobx-react-lite';
import { useStores } from 'store/index.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'less/Home.less'
moment.locale('zh-cn');
const HeaderContent = loadable(() => import('components/HeaderContent'));
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
                homeStore.changeUserEmail(res.data.email)
                homeStore.changeIsLogin(true)
                let format_date = res.data.date.split('T')[0] + " " + res.data.date.split('T')[1].split('.')[0]
                homeStore.changeRegistTime(format_date)
                let this_time = moment().format().split('T')[0] + " " + moment().format().split('T')[1].split('+')[0]
                console.log(this_time)
                const res1 = await storage_this_time({ time: this_time })
                homeStore.changeLoginTime(this_time)
                if (res1.data == '登录时间写入成功') {
                    const res2 = await getLastTime()
                    console.log(res2)
                    storage_this_time({time:res2.data.date})
                }

            }
        }
    }
    useEffect(() => {
        authoritation_token()
    })
    return useObserver(() => (
        <React.Fragment>
            <HeaderContent></HeaderContent>
            <div className="img"></div>
        </React.Fragment>
    ))

})
