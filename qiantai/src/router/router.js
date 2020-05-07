import loadable from 'utils/loadable'//组件懒加载
const Login = loadable(() => import('containers/Login/Login'));
const Registers = loadable(() => import('containers/Register/Register'));
const Home = loadable(() => import('containers/Home'));
const Test = loadable(() => import('../store/Test'));
const PersonalInfo = loadable(() => import('containers/PersonalInfo'));
const TieZi = loadable(() => import('components/TieZi'));
const New = loadable(() => import('components/New'));
//在这里配置路由的信息
let routeConfig = [
  {
    path: "/New",
    exact: true,
    render: New
  },
  {
    path: "/TieZi",
    exact: true,
    render: TieZi
  },
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
