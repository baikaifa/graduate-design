import { observable, action, runInAction } from 'mobx';

class pagination {
  constructor(pagesize, showSizeChanger, showQuickJumper) {
    runInAction(() => {
      this.pageSize = pagesize || 10;
      this.showQuickJumper = showQuickJumper || false
      this.showSizeChanger = showSizeChanger || false
    })
  }
  @observable pageSize = 10;
  @observable currentPage = 1;
  @observable totalCount = 0;
  @observable showSizeChanger = true;
  @observable showQuickJumper = true;
  @observable getList = undefined;

  sourceStroe = this

  @observable onChange = i => {
    this.change(i);
  };
  @observable onShowSizeChange = (i, size, c) => {
    this.sizeChange(size);
  };

  @action init = obj => {
    this.currentPage = obj.currentPage;
    this.totalCount = obj.totalCount;
  };
  @action setPageData = (data) => {
    this.currentPage = data.currentPage;
    this.totalCount = data.totalCount;
  }

  @action setListAction = (action, store) => {
    this.getList = action
    this.sourceStroe = store
  }
  @action change = i => {
    this.currentPage = i;
    return this.getList.call(this.sourceStroe, this);
  };

  @action changePage=i=>{
    this.currentPage = i.pageNo;
    return this.getList.call(this.sourceStroe, i);
  }
  @action sizeChange = size => {
    this.currentPage = 1;
    this.pageSize = size;
    this.getList(this);
  };
}

export default pagination;
