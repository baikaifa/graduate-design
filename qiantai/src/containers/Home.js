import React, { useState, useEffect } from 'react';
import { message, Input, Button } from 'antd';
import loadable from 'utils/loadable'//组件懒加载
import { toJS } from 'mobx'
import { withRouter } from 'react-router';
import { getUser, storage_this_time, getLastTime } from 'api/HomeApi'
import { useObserver } from 'mobx-react-lite';
import { useStores } from 'store/index.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'less/Home.less'
import { Socket } from 'react-socket-io';
import { Event } from 'react-socket-io';

moment.locale('zh-cn');

// const options = { transports: ['websocket'] };
const HeaderContent = loadable(() => import('components/HeaderContent'));
const Carousel = loadable(() => import('components/Carousel'));
const AiKeVideo = loadable(() => import('components/AiKeVideo'));
const Footer = loadable(() => import('components/Footer'));
export default withRouter(function Home(props) {
    let store = useStores(); // 获取store
    const { homeStore, themeStore } = store;
    const [userList, set_userList] = React.useState([])
    const [text, set_text] = React.useState('')


    async function authoritation_token() {
        if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'))
            const res = await getUser(localStorage.getItem('token'))
            console.log(res)
            if (res.status == 200) {
                message.info('欢迎你' + res.data.email, 1)
                homeStore.User = res.data.email
                homeStore.socket.emit('login', String(res.data.email), () => {
                })

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
        homeStore.CreateSocket()
        authoritation_token()

    }, [])

    return useObserver(() => (
        <React.Fragment>
            {/* <Button
                onClick={() => {
                    homeStore.socket.emit('login', String(homeStore.User), () => {
                        message.info('用户' + homeStore.User + '加入聊天室')
                    })
                }}>
                加入聊天室
                    </Button> */}


            < HeaderContent ></HeaderContent >
            <AiKeVideo ></AiKeVideo>
            <div className="left">
                <Carousel></Carousel>
                <div className="chat">
                    <div className="col  s4">
                        <h3 className="flow-text center teal-text text-lighten-1">
                            在线用户
                    </h3>
                        {

                            homeStore.OnLineMember.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        <div>{item}</div> </React.Fragment>
                                );

                            })

                        }

                    </div>

                </div>
            </div>
            <div className="right">
                <div className="ZiXun">
                    <div className="head">热门资讯</div>

                    <li onClick={() => { props.history.push('/New') }}><span>【1.7话题】LOL新赛季到来隐藏海报曝光</span> <span>2020-01-06</span></li>
                    <li><span>【大话新闻】177期：明凯想做王者教练，May</span>  <span>2019-12-31</span> </li>
                    <li> <span>【皮埃斯公馆】AD之间的较量，求求队友别选</span> <span>2020-01-05</span></li>
                    <li> <span>【每周一辩】你是信号信号党还是语音党呢？</span> <span>2020-01-05</span></li>
                    <li> <span>【每周一污】德莱文和卡特？有种意想不到的</span> <span>2020-01-05</span></li>

                </div>
                <div className="cz">
                    {

                        homeStore.said.map((item, index) => {
                            console.log(toJS(item))
                            return (
                                <React.Fragment>
                                    <div>{item.name}:{item.msg}</div>
                                </React.Fragment>
                            );



                        })
                    }
                    <Input placeholder="插上一嘴"
                        value={homeStore.InputValue}
                        onChange={
                            (e) => {
                                homeStore.InputValue = e.target.value
                            }
                        }
                        onKeyDown={
                            (e) => {
                                if (e.nativeEvent.keyCode === 13) {
                                    homeStore.socket.emit("chat message", {
                                        name: String(homeStore.User),
                                        msg: e.target.value
                                    })
                                    homeStore.InputValue = ''
                                }

                            }
                        }
                    />
                </div>
            </div>

            <Footer></Footer>
        </React.Fragment >
    ))

})
