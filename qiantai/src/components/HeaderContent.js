
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useObserver } from 'mobx-react-lite';
import { useStores } from 'store/index.js';
import { Button } from 'antd'
export default withRouter(function HeaderContent(props) {
    let store = useStores(); // 获取store
    const { homeStore, themeStore } = store;

    return useObserver(() => (
        <React.Fragment>
            <div className="header">
                <img src={require('img/logo.png')}
                    className="logo_img"
                    onClick={() => { props.history.push('/Home') }}
                    alt="" />
                {
                    !homeStore.IsLogin && <img className="login"
                        onClick={() => { props.history.push('/Login') }}
                        src={require('img/login.png')} alt="" />
                }
                {
                    homeStore.UserEmail && <div className="userEmail"
                        onClick={() => { props.history.push('/PersonalInfo') }}
                    >{homeStore.UserEmail}</div>
                }
                {
                    homeStore.IsLogin && <Button ghost onClick={() => {
                        localStorage.removeItem('token')
                        
                    }} style={{ marginLeft: "16px" }} >退出登录</Button>
                }
            </div>
        </React.Fragment>
    ))
})

