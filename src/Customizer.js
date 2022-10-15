import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core'
import { LaptopChromebook, FreeBreakfast, LocalHotel, Add, Remove } from '@material-ui/icons'
import { CustomWorkContext } from './contexts/work.context'
import { CustomBreakContext } from './contexts/break.context'
import { CustomLongBreakContext } from './contexts/longBreak.context'

function Customizer() {
	const workContext = useContext(CustomWorkContext)
	const breakContext = useContext(CustomBreakContext)
	const longBreakContext = useContext(CustomLongBreakContext)

	const [breakLength, setBreakLength] = useState(5)
	const [workLength, setWorkLength] = useState(25)
	const [longBreakLength, setLongBreakLength] = useState(15)

	useEffect(() => {
		workContext.onChangeValue(workLength)
	}, [workContext, workLength])

	useEffect(() => {
		breakContext.onChangeValue(breakLength)
	}, [breakContext, breakLength])

	useEffect(() => {
		longBreakContext.onChangeValue(longBreakLength)
	}, [longBreakContext, longBreakLength])

	return (
		<>
			<div className="flex flex-col justify-evenly items-center gap-1 w-full h-full" style={{ backgroundColor: '#2d2d2d' }}>
				<div>
					<h1 style={{ color: 'white', fontSize: '25px', fontWeight: '600' }}>Configurações</h1>
				</div>
				<div className='flex flex-col justify-center items-center gap-2 w-full'>
					<div>
						<p style={{ color: 'white' }}>
							<FreeBreakfast />&nbsp;
							Break: <b>{breakLength}</b>
						</p>
					</div>
					<div className='flex gap-4'>
						<Button
							color="secondary"
							variant="contained"
							size="large"
							startIcon={<Remove />}
							onClick={() =>
								setBreakLength((prevLength) =>
									prevLength === 0 ? 0 : prevLength - 1
								)
							}
						></Button>
						<Button
							color="primary"
							variant="contained"
							size="large"
							startIcon={<Add />}
							onClick={() => setBreakLength(breakLength + 1)}
						></Button>
					</div>
				</div>


				<div className='flex flex-col justify-center items-center gap-2 w-full'>
					<div>
						<p style={{ color: 'white' }}>
							<LaptopChromebook />&nbsp;
							Work: <b>{workLength}</b>
						</p>
					</div>
					<div className='flex gap-4'>
						<Button
							color="secondary"
							variant="contained"
							size="large"
							startIcon={<Remove />}
							onClick={() =>
								setWorkLength((prevLength) =>
									prevLength === 0 ? 0 : prevLength - 1
								)
							}
						></Button>
						<Button
							color="primary"
							variant="contained"
							size="large"
							startIcon={<Add />}
							onClick={() => setWorkLength(workLength + 1)}
						></Button>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center gap-2 w-full'>
					<div>
						<p style={{ color: 'white' }}>
							<LocalHotel />&nbsp;
							Long Break: <b>{longBreakLength}</b>
						</p>
					</div>
					<div className='flex gap-4'>
						<Button
							color="secondary"
							variant="contained"
							size="large"
							startIcon={<Remove />}
							onClick={() =>
								setLongBreakLength((prevLength) =>
									prevLength === 0 ? 0 : prevLength - 1
								)
							}
						></Button>
						<Button
							color="primary"
							variant="contained"
							size="large"
							startIcon={<Add />}
							onClick={() => setLongBreakLength(longBreakLength + 1)}
						></Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Customizer;