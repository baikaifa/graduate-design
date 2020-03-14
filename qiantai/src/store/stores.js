// store/index.js
import { observable, action, computed } from 'mobx'

export class CounterStore {
  @observable
  count = 0

  @action
  increment() {
    this.count++
  }

  @action
  decrement() {
    this.count--
  }

  @computed
  get doubleCount() {
    return this.count * 2
  }
}

export class ThemeStore {
  @observable
  theme = 'light'

  @action
  setTheme(newTheme) {
    this.theme = newTheme
  }
}
