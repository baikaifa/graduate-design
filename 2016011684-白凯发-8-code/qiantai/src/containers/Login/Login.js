import loadable from 'utils/loadable'//组件懒加载
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react-lite';
const BackgroundVideo = loadable(() => import('components/BackgroundVideo/BackgroundVideo'));
const NormalLoginForm = loadable(() => import('./components/NormalLoginForm/NormalLoginForm'));


export default observer(withRouter(function Login(props) {
    useEffect(() => {
    })
    return (
        <React.Fragment>
            <BackgroundVideo />
            <NormalLoginForm />
        </React.Fragment>
    )
}))