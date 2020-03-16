
import { observable, action, runInAction } from 'mobx';
import { message } from 'antd'
import { toJS } from 'mobx'

export class homeStore {
    @observable IsLogin = undefined
    @observable Token = undefined
    @action changeIsLogin = (condition) => {
        this.IsLogin = condition
    }

    @action changeToken = (condition) => {
        this.Token = condition
    }

}

