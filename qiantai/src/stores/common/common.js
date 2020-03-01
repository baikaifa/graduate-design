import { observable, action } from "mobx";

class CommonStore {
  @observable title = "";
  @observable finished = false;
  @observable user = ""; //全局的userName
  constructor() {
    this.title = "My Title";
    this.finished = false;
  }

  @action 改变用户 = user => {
    this.user = user;
  };
  @action changeFinished = status => {
    this.finished = status;
  };
}

export default new CommonStore();
