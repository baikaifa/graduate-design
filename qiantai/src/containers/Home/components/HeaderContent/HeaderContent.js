
import React, { useState, useEffect } from 'react';
import s from './HeaderContent.module.less'
import { withRouter } from 'react-router';
import { useObserver } from 'mobx-react-lite';
import { useStores } from 'store/index.js';
export default withRouter(function HeaderContent(props) {
    let store = useStores(); // 获取store
    const { homeStore, themeStore } = store;

    return useObserver(() => (
        <React.Fragment>
            <div className={`${s.header}`}>
                <img src={require('./imgs/logo.png')} alt="" />
                {
                    homeStore.IsLogin && <img className={`${s.login}`}
                        onClick={() => { props.history.push('/Login') }}
                        src={require('./imgs/login.png')} alt="" />
                }
            </div>
        </React.Fragment>
    ))
})

