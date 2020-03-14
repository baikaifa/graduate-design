
import React, { useState, useEffect } from 'react';
import s from './HeaderContent.module.less'
import { withRouter } from 'react-router';
import { observer } from 'mobx-react-lite';
export default observer(withRouter(function HeaderContent(props) {

    return (
        <React.Fragment>
            <div className={`${s.header}`}>
                <img src={require('./imgs/logo.png')} alt="" />
                <img className={`${s.login}`}
                    onClick={() => { props.history.push('/Login') }}
                    src={require('./imgs/login.png')} alt="" />
            </div>
        </React.Fragment>
    )
}))

