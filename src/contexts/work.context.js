import { createContext, useState } from 'react';

const initialValue = {
	value: 0,
	onChangeValue: undefined,
	reset: undefined,
};

export const CustomWorkContext = createContext(initialValue);

function WorkContext({ children }) {
	const [value, setValue] = useState(0)

	const onChangeValue = (workValue) => {
		setValue(workValue)
	}

	const reset = () => {
		setValue(0)
	}

	return (
		<CustomWorkContext.Provider value={{ value, onChangeValue, reset }}>
			{children}
		</CustomWorkContext.Provider>
	)
}

export { WorkContext }