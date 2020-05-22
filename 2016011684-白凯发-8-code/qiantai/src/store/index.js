import React from 'react'

import { CounterStore } from './CounterStore';
import { ThemeStore } from './ThemeStore';
import  homeStore  from './HomeStore'
const StoresContext = React.createContext({
    counterStore: new CounterStore(),
    themeStore: new ThemeStore(),
    homeStore: homeStore
})
const store = { homeStore }

export const stores = {
    ...store
};


export const useStores = () => React.useContext(StoresContext)