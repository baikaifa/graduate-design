import React, { Component } from "react";
import { Switch, Route, HashRouter as Router, Redirect } from "react-router-dom";
import { Provider } from "mobx-react";
import { LocaleProvider } from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import { routers } from "./router/router";
import stores from "stores";
import { Counter } from 'stores';
class App extends Component {

  render() {
    return (
      <Provider {...stores}>
        <Counter>
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
        </Counter>
      </Provider>
    );
  }
}

export default App;
