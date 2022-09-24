import React, { useState, useEffect, useContext } from 'react';
import { Duration } from 'luxon';
import { Button } from '@material-ui/core'
import { LaptopChromebook, FreeBreakfast, LocalHotel, Pause, PlayArrow } from '@material-ui/icons'

import { breakContext, longBreakContext, workContext } from './Customizer'

import endedAudio from './Audio/alert_simple.wav'
import startedAudio from './Audio/notification_simple-01.wav'

const startedSound = new Audio(startedAudio)
const endedSound = new Audio(endedAudio)

function Timer() {
	const [timerLength, setTimerLength] = useState(1500);
	const [timerOn, setTimerOn] = useState(false);
	const [timerDone, setTimerDone] = useState(true);

	const [sessionType, setSessionType] = useState('Work');
	const [sessionNumber, setSessionNumber] = useState(0);

	const longBreakLength = useContext(longBreakContext)
	const breakLength = useContext(breakContext)
	const workLength = useContext(workContext)

	useEffect(() => {
		const interval = setInterval(() => {
			if (timerOn) {
				setTimerLength((timerLength) => timerLength - 1);
			}
		}, 1000);
		if (timerOn) {
			setTimerDone(false);
		}
		return () => {
			clearInterval(interval);
		};
	}, [timerOn]);

	useEffect(() => {
		if (timerLength === 0) {
			setTimerOn(false);
			setTimerDone(true);
			setSessionType((prevType) => {
				if (prevType === "Work") return "Break";
				if (prevType === "Break") return "Work";
				if (prevType === "Long Break") return "Work";
			});
		}
	}, [timerLength]);

	useEffect(() => {
		if (sessionType === "Work") {
			setTimerLength(workLength);
		}
	}, [sessionType, workLength]);
	useEffect(() => {
		if (sessionType === "Break") {
			setTimerLength(breakLength);
		}
	}, [breakLength, sessionType]);

	useEffect(() => {
		if (sessionType === "Long Break") {
			setTimerLength(longBreakLength);
		}
	}, [longBreakLength, sessionType]);

	useEffect(() => {
		if (sessionType === "Work" && timerDone) {
			setSessionNumber((prevNumber) => prevNumber + 1);
		}
		if (timerDone) {
			endedSound.play()
		}
	}, [sessionType, timerDone]);

	useEffect(() => {
		if (sessionNumber > 4) {
			setSessionType("Long Break")
			setSessionNumber(0)
		}
	}, [sessionNumber])

	return (
		<>
			<div className="flex flex-col">
				<Button
					variant="contained"
					color="primary"
					size="large"
					startIcon={timerOn ? <Pause /> : <PlayArrow />}
					onClick={() => {
						setTimerOn(!timerOn)
						startedSound.play()
					}}
				>
					{timerOn ? "Pause" : "Run"}
				</Button>
				<div className='flex flex-col justify-center items-center'>
					<p className="font-sans tracking-widest text-6xl text-primary">
						{Duration.fromObject({ seconds: timerLength }).toFormat("mm:ss")}
					</p>
					<p className="text-sessionNumber text-2xl">
						Session Number: {sessionNumber}
					</p>
					<div>
						{sessionType === "Break" && (
							<FreeBreakfast style={{ color: "white" }} />
						)}
						{sessionType === "Work" && (
							<LaptopChromebook style={{ color: "white" }} />
						)}
						{sessionType === "Long Break" && (
							<LocalHotel style={{ color: "white" }} />
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Timer;