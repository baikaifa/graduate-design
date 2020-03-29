
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
export default class componentName extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="car">
                    <Carousel autoplay
                        style={{ height: 400, width: 640 }}
                    >
                        <div>
                            <img
                                onClick={() => { this.props.history.push('/TieZi') }}
                                src="http://shp.qpic.cn/txdiscuz_pic/0/_bbs_lol_qq_com_forum_201912_21_235059ld09e9r7tree8o0z.png/0" alt="" />
                        </div>
                        <div>
                            <img src="http://shp.qpic.cn/txdiscuz_pic/0/_bbs_lol_qq_com_forum_201912_23_205448c0x7jrn7hghqvxsj.jpg/0" alt="" />
                        </div>
                    </Carousel>
                </div>
            </React.Fragment>
        );
    }
}
