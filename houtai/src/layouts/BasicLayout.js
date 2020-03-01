import React, { Component, Fragment } from "react";
import { getRouterTemplate, getRouterMenu } from "../router/router";
import { withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import  Admin  from 'containers/Admin/Admin'

@withRouter

@observer
export default class BasicLayout extends React.Component {
  state = { version: 0, can_render: false };
  render() {
    const routers = getRouterTemplate();
    const menuList = getRouterMenu();

    return <Admin routers={routers} menuList={menuList} />;
  }

}
