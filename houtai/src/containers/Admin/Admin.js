import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx'
import { Popconfirm, Progress, notification, message, Modal, Drawer, Alert, Tabs, Table, Divider, Tag, Timeline, Tree, Statistic, Popove, List, Empty, Descriptions, Calendar, Card, Carousel, Collapse, Tooltip, Comment, Badge, Avatar, TimePicker, Transfer, TreeSelect, Select, Slider, Switch, Radio, Rate, Mentions, InputNumber, Input, Form, DatePicker, Cascader, Checkbox, AutoComplete, Button, Upload, Icon, Spin, Typography, Row, Col, Header, Footer, Sider, Content, Affix, Breadcrumb, Menu, Dropdown, Pagination, PageHeader, Steps } from 'antd'
import moment from 'moment';
import DomSize from "wd-domsize-monitor";
import { withRouter } from "react-router";
import 'moment/locale/zh-cn';
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
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
import NormalLoginForm from './components/NormalLoginForm/NormalLoginForm'
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

//inject与observer必须紧跟class，否则会出现当props改变的时候页面不重新渲染的问题
@withRouter

@observer
export default class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                hello
                <NormalLoginForm />
            </React.Fragment>
        );
    }
}
