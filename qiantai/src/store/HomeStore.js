
import { observable, action, runInAction } from 'mobx';
import { message } from 'antd'
import { toJS } from 'mobx'
import * as api from 'api/HomeApi'
import axios from "xhr/fetch";
class homeStore {
    @observable IsLogin = undefined
    @observable Token = undefined
    @observable UserEmail = undefined
    @observable RegistTime = undefined
    @observable LoginTime = undefined
    @observable TextAreaValue = undefined
    @observable CommentList = []

    @action GetTieZiComment = async (condition) => {
        const res = await axios.get('/api/commentList')
        console.log(res)
        let NewCommentList = []
        for (let [i, item] of res.data.entries()) {
            if (!(item.textValue.length == 0)) {
                NewCommentList.push(item.textValue[0])
            }
        }
        this.CommentList = NewCommentList
    }

    @action AddComment = async () => {
        console.log(this.TextAreaValue)
        const res = await axios.post('/api/commentList/add', { textValue: this.TextAreaValue })
        await this.GetTieZiComment()
        this.TextAreaValue = undefined
    }

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