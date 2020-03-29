
import { observable, action, runInAction } from 'mobx';
import { message } from 'antd'
import { toJS } from 'mobx'

class homeStore {
    @observable IsLogin = undefined
    @observable Token = undefined
    @observable UserEmail = undefined
    @observable RegistTime = undefined
    @observable LoginTime = undefined
    @action changeLoginTime = (condition) => {
        this.LoginTime = condition
    }

    @action changeRegistTime = (condition) => {
        this.RegistTime = condition

    }
    @action changeUserEmail = (condition) => {
        this.UserEmail = condition
    }
    @action changeIsLogin = (condition) => {
        this.IsLogin = condition
    }

    @action changeToken = (condition) => {
        this.Token = condition
    }

}


export default new homeStore();