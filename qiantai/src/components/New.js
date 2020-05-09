
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { toJS } from 'mobx'
import loadable from 'utils/loadable'//组件懒加载
import $ from "jquery";
import { Popconfirm, Progress, notification, message, Modal, Drawer, Alert, Tabs, Table, Divider, Tag, Timeline, Tree, Statistic, Popove, List, Empty, Descriptions, Calendar, Card, Carousel, Collapse, Tooltip, Comment, Badge, Avatar, TimePicker, Transfer, TreeSelect, Select, Slider, Switch, Radio, Rate, Mentions, InputNumber, Input, Form, DatePicker, Cascader, Checkbox, AutoComplete, Button, Upload, Icon, Spin, Typography, Row, Col, Header, Footer, Sider, Content, Affix, Breadcrumb, Menu, Dropdown, Pagination, PageHeader, Steps } from 'antd'
import moment from 'moment';
import DomSize from "wd-domsize-monitor";
import 'moment/locale/zh-cn';
import {
    getDivWidthAndHeight, getUploadImageWidthAndHeight, getMedia, takePhoto, ReplaceBase64, sleepPromise, str_to_base64, unique, deepCopy, compare, img_format_size, picture_lazy_load, formatDate,
} from "utils/utils";
//在下面添加新的import
import copy from 'copy-to-clipboard';
moment.locale('zh-cn');
const { SubMenu } = Menu;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Step } = Steps;
const { Title } = Typography;
const { Option } = Mentions;
const { Option1 } = Select;
const { Panel } = Collapse;
const { TabPane } = Tabs;
const { SHOW_PARENT } = TreeSelect;
const { TextArea } = Input;
//在下面添加新的const
const HeaderContent = loadable(() => import('./HeaderContent'));
const AiKeVideo = loadable(() => import('./AiKeVideo'));
const Footers = loadable(() => import('./Footer'));
//inject与observer必须紧跟class，否则会出现当props改变的时候页面不重新渲染的问题
@withRouter
@inject('homeStore')
@observer
export default class New extends Component {
    state = {
        CanRender: false
    }

    componentDidMount = async () => {

        let { homeStore } = this.props
        await homeStore.GetTieZiComment()
        console.log(toJS(homeStore.CommentList))
       
        this.setState((prevState) => ({
            CanRender: true
        }))
        console.log(toJS(homeStore.CommentList))
    }
    render() {
        let { homeStore } = this.props
        return (
            <React.Fragment>
                <HeaderContent></HeaderContent>
                <AiKeVideo></AiKeVideo>

                <div className="title"
                    id="TieZiTitle"
                    onClick={(e) => {
                        let value = $('.content').html()
                        console.log(value)
                        copy(value)
                    }}
                >
                    <span className="content">【撸在囧图】283期：玩辅助抢了人头怎么办？在线等</span>  <span className="copyLianJie" >[复制链接]</span>
                </div>
                <div className="TieZiWrap">
                    <div className="TieZiLeft">
                        <div className="Avatar">
                            发帖人：      {this.props.homeStore.User}
                        </div>
                        {/* <div className="TieZiNum">
                            <span>贴子数：</span>1
                        </div> */}
                    </div>
                    <div className="TieZiRight">
                        <div className="TieZiRightContent">
                            <img src="http://localhost:5000/new.jpg" alt=""/>
                            <img src={require('img/11.png')} falt="" />
                            <img src={require('img/12.png')} />
                            <p style={{"color":"red"}}> 近日，英雄联盟官博分享了一些关于季前赛倒计时的图。截至1月6日，只放出了两个位置的海报，分别是上单厄加特和打野狮子狗。那么召唤师们对此有什么期待呢？一起讨论讨论吧！</p>
                            <p>1.每天评选3个优秀回复，并展示于次日话题帖2楼。这3个回复发布用户将分别获得30论坛金钱。</p>
                            <p>2.话题内容仅为版主团提供的讨论内容，不代表官方立场。所有内容以国服官网与现网客户端数据为准。</p>
                            <p>3.灌水账号将被禁言处罚。</p>
                            {/* {this.state.CanRender &&
                                homeStore.CommentList.map((item, index) => {
                                    return (
                                        <React.Fragment>
                                            <div>
                                                <div>匿名用户：{item}</div>    
                                            </div>
                                        </React.Fragment>
                                    );

                                })
                            } */}
                        </div>
                    </div>
                </div>
                {/* <div className="comment">


                    <div className="commentLeft">
                        {homeStore.UserEmail}
                    </div>
                    <div className="commentRight">
                        <TextArea
                            value={homeStore.TextAreaValue}
                            onChange={(e) => {
                                let value = e.target.value
                                console.log(value)
                                homeStore.TextAreaValue = value
                            }}
                            className="commentInput" placeholder='请输入评论内容' />
                    </div>
                    <Button type="primary"
                        onClick={() => {
                            homeStore.AddComment()
                        }}
                    >发表回复</Button>
                </div> */}
                <Footers>

                </Footers>
            </React.Fragment>
        );
    }
}
