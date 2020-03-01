import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button } from "antd";
import "./gateway.less";
import Navigate from "./components/Navigate";
import Footer from "./components/footer";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { MODIFY } from "../../../service/api/AdminApi";
import { withRouter } from "react-router-dom";
const { Header, Content, Sider } = Layout;

@withRouter
@inject("AdminStore")
@observer
export class Gateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirm_password: ""
    };
  }

  render() {
    const { menuList, routers } = this.props;
    return (
      <React.Fragment>
        <Layout theme="dark" className="mainLayout yl-ai-home">
          <div
            className="user"
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log(this.props.AdminStore.suqare_display);
              if (this.props.AdminStore.suqare_display) {
                this.props.AdminStore.a_suqare_display(false);
              } else {
                this.props.AdminStore.a_suqare_display(true);
              }
              if (this.state.modify_password_display) {
                this.props.AdminStore.a_suqare_display(false);
              }
            }}
          ></div>
          {this.props.AdminStore.suqare_display && (
            <div
              className="div_logout_modify_password"
              style={{ zIndex: "1000" }}
            >
              {this.state.div_logout_modify_password_logout_hover && (
                <div className="div_logout_modify_password_logout_hover"></div>
              )}
              <div
                onMouseEnter={() => {
                  this.setState(() => ({
                    div_logout_modify_password_logout_hover: true
                  }));
                }}
                onMouseLeave={() => {
                  this.setState(() => ({
                    div_logout_modify_password_logout_hover: false
                  }));
                }}
              >
                <div className="div_logout_modify_password_icon_logout"></div>
                <div
                  className="div_logout_modify_password_icon_logout_word"
                  style={{ zIndex: "1000" }}
                  onClick={() => {
                    this.props.history.push("/");
                    localStorage.removeItem("token");
                    this.props.AdminStore.change_token();
                  }}
                >
                  <div className="wenzi1" style={{ zIndex: "1001" }}>
                    退出
                  </div>
                </div>
              </div>

              {this.state.div_logout_modify_password_icon_modify_password && (
                <div className="div_logout_modify_password_modify_password_hover"></div>
              )}
              <div
                style={{ cursor: "pointer" }}
                onMouseEnter={() => {
                  this.setState(() => ({
                    div_logout_modify_password_icon_modify_password: true
                  }));
                }}
                onMouseLeave={() => {
                  this.setState(() => ({
                    div_logout_modify_password_icon_modify_password: false
                  }));
                }}
                onClick={() => {
                  this.setState(() => ({
                    change_password_display: true
                  }));
                }}
              >
                <div className="div_logout_modify_password_icon_modify_password"></div>
                <div
                  className="div_logout_modify_password_icon_modify_password_word"
                  onClick={() => {
                    this.props.AdminStore.a_show_toast_display();
                    this.setState(() => ({
                      modify_password_display: true
                    }));
                  }}
                >
                  <div className="wenzi2">修改密码</div>
                </div>
              </div>
            </div>
          )}
          {this.props.AdminStore.toast_display && (
            <div className="toast_toast">
              {this.state.modify_password_display && (
                <div className="Navigate_div_modify_password">
                  <div className="Navigate_div_modify_password_word">
                    修改密码
                  </div>
                  <div className="Navigate_div_modify_password_img"></div>
                  <div className="Navigate_div_modify_password_icon_Navigate_div_modify_password_input_wrap">
                    <div className="Navigate_div_modify_password_icon"></div>
                    <input
                      type="text"
                      className="Navigate_div_modify_password_input"
                      placeholder="密码"
                      type="password"
                      ref={input_password => {
                        this.input_password = input_password;
                      }}
                      onBlur={e => {
                        this.handle_password_blur(e);
                      }}
                    />
                    <div className="Navigate_div_modify_password_line"></div>
                  </div>

                  <div className="Navigate_div_modify_password_icon_Navigate_div_modify_password_input_wrap">
                    <div className="Navigate_div_modify_password_icon"></div>
                    <input
                      type="text"
                      className="Navigate_div_modify_password_input"
                      placeholder="确认密码"
                      type="password"
                      ref={confirm_password => {
                        this.confirm_password = confirm_password;
                      }}
                      onBlur={e => {
                        this.handle_confirm_password_blur(e);
                      }}
                    />
                    <div className="Navigate_div_modify_password_line"></div>
                  </div>
                  {this.state.confirm_password_display && (
                    <div className="Navigate_div_modify_password_warn">
                      {this.state.password_warn}
                    </div>
                  )}
                  <div className="Navigate_div_modify_password_btn_wrap">
                    <Button
                      className="Navigate_div_modify_password_confirm"
                      type="primary"
                      onClick={() => {
                        this.setState(() => ({
                          modify_password_display: false
                        }));
                        this.fun_modify_password(
                          this.props.AdminStore.a_show_toast_displayFalse
                        );
                      }}
                    >
                      确定
                    </Button>
                    <Button
                      className="Navigate_div_modify_password_cancel"
                      onClick={() => {
                        this.setState(() => ({
                          modify_password_display: false
                        }));
                        this.props.AdminStore.a_show_toast_displayFalse();
                      }}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          <Header className="yl-header">
            <div className="yl-header-container">
              <div className="yl-header-icon"></div>
              <div className="yl-header-menu">
                <Navigate />
              </div>
            </div>
          </Header>

          <Layout className="mainContainer">
            <Content className="rightContainer">
              <Switch>
                {routers.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.render}
                  />
                ))}
                <Redirect from="/" to={routers[0].path} />
              </Switch>
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
  validate_password(ref) {
    const value = ref;
    var patt1 = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);
    var result = patt1.test(value);
    return result;
  }

  handle_password_blur() {
    if (this.validate_password(this.input_password.value)) {
      this.setState(() => ({
        password: this.input_password.value,
        confirm_password_display: false,
        password_warn: "",
        cannot_change_warn: false
      }));
    } else {
      this.setState(() => ({
        confirm_password_display: true,
        password_warn: "密码格式不正确",
        cannot_change_warn: true
      }));
    }
  }
  handle_confirm_password_blur(e) {
    if (!this.state.cannot_change_warn) {
      const value = this.confirm_password.value;
      if (value === "") {
      } else {
        if (value === this.state.password) {
          this.setState(() => ({
            confirm_password_display: false,
            couldConfirm: true,
            password_warn: ""
          }));
        } else {
          this.setState(() => ({
            confirm_password_display: true,
            couldConfirm: false,
            password_warn: "两次密码不一致"
          }));
        }
      }
    }
  }
  fun_modify_password() {
    if (this.state.couldConfirm) {
      let token = localStorage.getItem("token");
      let params = new FormData();
      params.append("password", this.state.password);
      MODIFY(token, params).then(res => {
        if (res.code === 200) {
          this.props.AdminStore.a_show_toast_displayFalse();
        }
      });
    } else {
      this.setState(() => ({
        confirm_password_display: true,
        modify_password_display: true
      }));
    }
  }
}
