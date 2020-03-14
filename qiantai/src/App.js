import React, { Component } from "react";
import { Switch, Route, HashRouter as Router, Redirect } from "react-router-dom";
import { Provider } from "mobx-react";
import { LocaleProvider } from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import { routers } from "./router/router";

class App extends Component {
  render() {
    return (

      <Router>
        <LocaleProvider locale={zhCN}>
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
        </LocaleProvider>
      </Router>

    );
  }
}

export default App;
