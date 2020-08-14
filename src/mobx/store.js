import { observable, action } from "mobx";

class CounterStore {
  @observable step = 0;

  @action
  doStep = () => {
    this.step++;
  };

  @action
  doReset = () => {
    this.step = 0;
  };
}

export default new CounterStore();
