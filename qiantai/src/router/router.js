import loadable from 'utils/loadable'//组件懒加载
const Login = loadable(() => import('containers/Login/Login.js'));

const Registers = loadable(() => import('containers/Register/Register'));

//在这里配置路由的信息
let routeConfig = [
  {
    path: "/Register",
    exclude: true, //菜单显示
    exact: true,
    render: Registers
  },
];
const routers = [
  {
    path: "/Login",
    exclude: true, //菜单显示
    exact: true,
    render: Login
  },
  ...routeConfig
];



export { routers };
