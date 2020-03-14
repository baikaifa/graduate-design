import React from 'react'

import { CounterStore } from './CounterStore';
import { ThemeStore } from './ThemeStore';
const StoresContext = React.createContext({
    counterStore: new CounterStore(),
    themeStore: new ThemeStore()
})

export const useStores = () => React.useContext(StoresContext)