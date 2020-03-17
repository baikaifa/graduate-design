
import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx'
import loadable from 'utils/loadable'//组件懒加载
import { Popconfirm, Progress, notification, message, Modal, Drawer, Alert, Tabs, Table, Divider, Tag, Timeline, Tree, Statistic, Popove, List, Empty, Descriptions, Calendar, Card, Carousel, Collapse, Tooltip, Comment, Badge, Avatar, TimePicker, Transfer, TreeSelect, Select, Slider, Switch, Radio, Rate, Mentions, InputNumber, Input, Form, DatePicker, Cascader, Checkbox, AutoComplete, Button, Upload, Icon, Spin, Typography, Row, Col, Header, Footer, Sider, Content, Affix, Breadcrumb, Menu, Dropdown, Pagination, PageHeader, Steps } from 'antd'
import moment from 'moment';
import DomSize from "wd-domsize-monitor";
import { withRouter } from "react-router";
import { useObserver } from 'mobx-react-lite';
import 'moment/locale/zh-cn';
import { Link } from "react-router-dom";
import { useStores } from 'store/index.js';
import {
    getDivWidthAndHeight, getUploadImageWidthAndHeight, getMedia, takePhoto, ReplaceBase64, sleepPromise, str_to_base64, unique, deepCopy, compare, img_format_size, picture_lazy_load, formatDate,
} from "utils/utils";
import $ from "jquery";
//在下面添加新的import

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
const HeaderContent = loadable(() => import('components/HeaderContent'));
export default withRouter(function PersonalInfo(props) {
    let store = useStores(); // 获取store
    const { homeStore } = store;
    console.log(homeStore)
    return useObserver(() => (
        <React.Fragment>
            <HeaderContent></HeaderContent>
            <div className="img"></div>
            {
                homeStore.IsLogin && <React.Fragment>
                    <div className="all ">
                        <div className="fen_jie_xian">
                            {
                                homeStore.UserEmail && <div className="userEmail"
                                >{homeStore.UserEmail}</div>
                            }

                            <div className="tong_ji__xin_xi">
                                <span><span>好友数</span><span>0</span></span>|
                                <span><span>回帖数</span><span>0</span></span>|
                                <span><span>主题数</span><span>0</span></span>
                            </div>
                            <div className="regist_time">注册时间：{homeStore.RegistTime}</div>
                        </div>
                        <div className="fen_jie_xian">
                            上次登录时间:&nbsp;&nbsp;&nbsp;{homeStore.LoginTime}
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    ))

})
