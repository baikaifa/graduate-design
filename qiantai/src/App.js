import React, { Component } from "react";
import { Switch, Route, HashRouter as Router, Redirect } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "mobx-react";
import zhCN from 'antd/es/locale/zh_CN';
import { routers } from "./router/router";
import { stores } from 'store/index'
class App extends Component {
  
  render() {
    return (
      <Provider {...stores}>
      <Router>
        <ConfigProvider locale={zhCN}>
          <Switch>
            {routers.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.render}
              />
            ))}
            
          </Switch>
          <Redirect from="/" to={routers[0].path} />
        </ConfigProvider>
      </Router>
      </Provider>
    );
  }
}

export default App;
