import { createContext, useState } from 'react';

const initialValue = {
    value: 0,
    onChangeValue: () => { },
    reset: undefined,
};

export const CustomLongBreakContext = createContext(initialValue);

function LongBreakContext({ children }) {
    const [value, setValue] = useState(0)

    const onChangeValue = (workValue) => {
        setValue(workValue)
    }

    const reset = () => {
        setValue(0)
    }

    return (
        <CustomLongBreakContext.Provider value={{ value, onChangeValue, reset }}>
            {children}
        </CustomLongBreakContext.Provider>
    )
}

export { LongBreakContext }