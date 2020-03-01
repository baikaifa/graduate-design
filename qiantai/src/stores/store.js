
import { configure } from 'mobx';
import globalStore from './common/global';
import store from "./index";
//引用store组件

configure({
  enforceActions: 'always', // 严格模式
});

const stores = {
  globalStore,
  ...store
};

export default stores;