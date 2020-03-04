import { observable, action, runInAction } from 'mobx';

import * as InfoApi from "@/service/api/AddressExtractionApi";

class AddressExtractionStore {
  @observable list = [{ key: "key_478qwe45", id: "1", name: "你好" }];


  @action saveItem = (obj) => {
  }



}

export default new AddressExtractionStore();