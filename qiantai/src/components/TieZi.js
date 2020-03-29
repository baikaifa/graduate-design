
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
//在下面添加新的const
const HeaderContent = loadable(() => import('./HeaderContent'));
const AiKeVideo = loadable(() => import('./AiKeVideo'));
//inject与observer必须紧跟class，否则会出现当props改变的时候页面不重新渲染的问题
@withRouter

@observer
export default class componentName extends Component {
    render() {
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

                    </div>
                    <div className="TieZiRight">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
