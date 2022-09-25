import { createContext, useState } from 'react';

const initialValue = {
    value: 0,
    onChangeValue: undefined,
    reset: undefined,
};

export const CustomBreakContext = createContext(initialValue);

function BreakContext({ children }) {
    const [value, setValue] = useState(0)

    const onChangeValue = (workValue) => {
        setValue(workValue)
    }

    const reset = () => {
        setValue(0)
    }

    return (
        <CustomBreakContext.Provider value={{ value, onChangeValue, reset }}>
            {children}
        </CustomBreakContext.Provider>
    )
}

export { BreakContext }