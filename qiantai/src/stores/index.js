import React, { createContext } from 'react';
import { useLocalStore, observer } from 'mobx-react-lite';
import { configure } from 'mobx';

//引用store组件
const store = {}
export const MyContext = createContext(null);
export const Counter = observer((props) => {
    const store = useLocalStore(() => (
        {
            count: 1,
            get getCount() {
                return store.count;
            },
            handleCount() {
                store.count += 2;
            }
        }
    ));
    return (
        <MyContext.Provider value={store}>
            {props.children}
        </MyContext.Provider>
    );
});
// configure({
//     enforceActions: 'always', // 严格模式
// });
const stores = {
    ...store
};

export default stores;