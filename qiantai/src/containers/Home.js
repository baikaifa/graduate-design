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
const Carousel = loadable(() => import('components/Carousel'));
const AiKeVideo = loadable(() => import('components/AiKeVideo'));
const Footer = loadable(() => import('components/Footer'));
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
                homeStore.User = res.data.email
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
                    storage_this_time({ time: res2.data.date })
                }

            }
        }
    }
    useEffect(() => {
        authoritation_token()
    })
    return useObserver(() => (
        <React.Fragment>
            <HeaderContent ></HeaderContent>
            <AiKeVideo ></AiKeVideo>
            <div className="left">
                <Carousel></Carousel>

            </div>
            <div className="right">
                <div className="ZiXun">
                    <div className="head">热门资讯</div>

                    <li onClick={ () => {props.history.push('/New')} }><span>【1.7话题】LOL新赛季到来隐藏海报曝光</span> <span>2020-01-06</span></li>
                    <li><span>【大话新闻】177期：明凯想做王者教练，May</span>  <span>2019-12-31</span> </li>
                    <li> <span>【皮埃斯公馆】AD之间的较量，求求队友别选</span> <span>2020-01-05</span></li>
                    <li> <span>【每周一辩】你是信号信号党还是语音党呢？</span> <span>2020-01-05</span></li>
                    <li> <span>【每周一污】德莱文和卡特？有种意想不到的</span> <span>2020-01-05</span></li>

                </div>
            </div>

            <Footer></Footer>
        </React.Fragment >
    ))

})
