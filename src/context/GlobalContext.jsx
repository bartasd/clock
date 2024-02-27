import { createContext, useState } from 'react';

export const initialTime = {
    time: [0,0,0],
    updateTime: () => { },
};

export const GlobalContext = createContext(initialTime);

export function ContextWrapper(props) {
    const [time, setTime] = useState(initialTime.time);

    function updateTime(newTime) {
        setTime(newTime);
    }

    const value = {
        time,
        updateTime,
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}