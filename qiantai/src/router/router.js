import loadable from 'utils/loadable'//组件懒加载
const Login = loadable(() => import('containers/Login/Login'));
const Registers = loadable(() => import('containers/Register/Register'));
const Home = loadable(() => import('containers/Home'));
const Test = loadable(() => import('../store/Test'));
const PersonalInfo = loadable(() => import('containers/PersonalInfo'));
//在这里配置路由的信息
let routeConfig = [
  {
    path: "/PersonalInfo",
    exact: true,
    render: PersonalInfo
  },
  {
    path: "/Test",
    exact: true,
    render: Test
  },
  {
    path: "/Register",
    exact: true,
    render: Registers
  },
];
const routers = [
  {
    path: "/Home",
    exact: true,
    render: Home
  },
  {
    path: "/Login",
    exact: true,
    render: Login
  },
  ...routeConfig
];



export { routers };
