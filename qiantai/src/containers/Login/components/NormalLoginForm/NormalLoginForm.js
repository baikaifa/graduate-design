import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router';
import { Observer, observer } from 'mobx-react-lite';
import { Popconfirm, Progress, notification, message, Modal, Drawer, Alert, Tabs, Table, Divider, Tag, Timeline, Tree, Statistic, Popove, List, Empty, Descriptions, Calendar, Card, Carousel, Collapse, Tooltip, Comment, Badge, Avatar, TimePicker, Transfer, TreeSelect, Select, Slider, Switch, Radio, Rate, Mentions, InputNumber, Input, Form, DatePicker, Cascader, Checkbox, AutoComplete, Button, Upload, Icon, Spin, Typography, Row, Col, Header, Footer, Sider, Content, Affix, Breadcrumb, Menu, Dropdown, Pagination, PageHeader, Steps } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from 'api/loginApi'
import s from './NormalLoginForm.module.less'
import jwt_decode from 'jwt-decode'
import './NormalLoginForm.css'
import { useObserver } from 'mobx-react-lite';
import { useStores } from 'store/index.js';

export default withRouter(function NormalLoginForm(props) {
    let store = useStores(); // 获取store
    let { homeStore } = store
    const onFinish = async values => {
        console.log('Received values of form: ', values);
        const res = await login({
            email: values.email,
            password: values.password,
        })
        console.log(res)
        if (res.data.success == true) {
            message.info('登录成功')
            const decoded = jwt_decode(res.data.token)
            console.log(decoded)
            localStorage.setItem('token', res.data.token)
            homeStore.changeToken(res.data.token)
            props.history.push('/Home')
        } else {
            message.info(res.data)
        }
    };
    return useObserver(() =>
        <React.Fragment>
            <div className={`${s.formWrap}`}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
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

                            onClick={() => { props.history.push('/Register') }}
                        >注册</a>
                    </Form.Item>
                </Form>

            </div>



        </React.Fragment>
    )
})

