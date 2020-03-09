

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx'
import { Popconfirm, Progress, notification, message, Modal, Drawer, Alert, Tabs, Table, Divider, Tag, Timeline, Tree, Statistic, Popove, List, Empty, Descriptions, Calendar, Card, Carousel, Collapse, Tooltip, Comment, Badge, Avatar, TimePicker, Transfer, TreeSelect, Select, Slider, Switch, Radio, Rate, Mentions, InputNumber, Input, Form, DatePicker, Cascader, Checkbox, AutoComplete, Button, Upload, Icon, Spin, Typography, Row, Col, Header, Footer, Sider, Content, Affix, Breadcrumb, Menu, Dropdown, Pagination, PageHeader, Steps } from 'antd'
import moment from 'moment';
import DomSize from "wd-domsize-monitor";
import { withRouter } from "react-router";
import 'moment/locale/zh-cn';
import { Link } from "react-router-dom";
import {
    getDivWidthAndHeight,
    getUploadImageWidthAndHeight,
    getMedia,
    takePhoto,
    ReplaceBase64,
    sleepPromise,
    str_to_base64,
    unique,
    deep_copy,
    compare,
    img_format_size,
    picture_lazy_load,
    formatDate,
} from "utils/utils";
import $ from "jquery";
//在下面添加新的import
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from 'api/login'
import s from './NormalLoginForm.module.less'
import './NormalLoginForm.css'
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

//在下面添加新的const
//inject与observer必须紧跟class，否则会出现当props改变的时候页面不重新渲染的问题
@withRouter

@observer
export default class NormalLoginForm extends Component {

    render() {
        const NormalLoginForm = () => {
            const onFinish = async values => {
                console.log('Received values of form: ', values);
                const res = await login({
                    email: values.email,
                    password: values.password,
                })
               if(res.success==true){
                    message.info('登录成功')
                    localStorage.setItem('token',res.token)
               }else{
                   message.info(res)
               }
            };
            return (
                <React.Fragment>
                    <div className={`${s.formWrap}`}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className={`${s.huozhe}`}>记住密码</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    忘记密码
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                  </Button>
                                <span className={`${s.huozhe}`}>或者</span>
                                <a

                                    onClick={() => { this.props.history.push('/Register') }}
                                >注册</a>
                            </Form.Item>
                        </Form>

                    </div>

                </React.Fragment>

            );
        };
        return <React.Fragment>
            <NormalLoginForm />
        </React.Fragment>
    }
}


