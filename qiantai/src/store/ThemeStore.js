// store/index.js
import { observable, action, computed } from 'mobx'

export class ThemeStore {
    @observable
    theme = 'light'
    @action
    setTheme(newTheme) {
        this.theme = newTheme
    }
}