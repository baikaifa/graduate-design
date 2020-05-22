import React from 'react';
import { useStores } from 'store/index.js';
import { useObserver } from 'mobx-react-lite';

const Counter = () => {
    let store = useStores(); // 获取store

    const { counterStore, themeStore } = store;

    const handleIncrement = () => {
        counterStore.increment();
    }
    const handleDecrement = () => {
        counterStore.decrement();
    }

    return useObserver(() => (
        <div>
            <p>count: {counterStore.count}</p>
            <p>theme: {themeStore.theme}</p>
            <button onClick={handleIncrement}>add</button>
            <button onClick={handleDecrement}>dec</button>
        </div>
    ))
}

export default Counter;
