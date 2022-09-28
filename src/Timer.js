import React, { useState, useEffect, useContext } from 'react';
import { Duration } from 'luxon';
import { Button } from '@material-ui/core'
import { LaptopChromebook, FreeBreakfast, LocalHotel, Pause, PlayArrow } from '@material-ui/icons'

import { CustomWorkContext } from './contexts/work.context'
import { CustomBreakContext } from './contexts/break.context'
import { CustomLongBreakContext } from './contexts/longBreak.context'

import endedAudio from './Audio/alert_simple.wav'
import startedAudio from './Audio/notification_simple-01.wav'

import tomatoImage from './assets/tomato.png'

import "./index.css";

const startedSound = new Audio(startedAudio)
const endedSound = new Audio(endedAudio)


function tomatoesCount() {
	return (
		<img style={{ width: '60px', height: '60px' }} src={tomatoImage} alt='tomatinho' />
	)
}

function Timer() {
	const [timerLength, setTimerLength] = useState(1500);
	const [timerOn, setTimerOn] = useState(false);
	const [timerDone, setTimerDone] = useState(true);

	const [sessionType, setSessionType] = useState('Work');
	const [sessionNumber, setSessionNumber] = useState(0);

	const longBreakContext = useContext(CustomLongBreakContext)
	const breakContext = useContext(CustomBreakContext)
	const workContext = useContext(CustomWorkContext)

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
			setTimerLength(workContext.value);
		}
	}, [sessionType, workContext]);
	useEffect(() => {
		if (sessionType === "Break") {
			setTimerLength(breakContext.value);
		}
	}, [breakContext, sessionType]);

	useEffect(() => {
		if (sessionType === "Long Break") {
			setTimerLength(longBreakContext.value);
		}
	}, [longBreakContext, sessionType]);

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
			{/* pai */}
			<div className='flex flex-col w-full h-full justify-evenly'>
				{/* filhos */}
				<div className='flex justify-center'>
					<Button
						className='w-[80%]'
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
				</div>
				<div className='flex justify-center'>
					<p className="font-sans tracking-widest text-6xl text-primary">
						{Duration.fromObject({ seconds: timerLength }).toFormat("mm:ss")}
					</p>
				</div>
				<div className='flex justify-center'>
					<p className="text-sessionNumber text-2xl">
						Session Number: {sessionNumber}
					</p>
				</div>
				<div className='flex justify-center items-center gap-1'>
					{(() => {
						let images = [];
						for (let i = 1; i <= sessionNumber; i++) {
							images.push(<img style={{ width: '60px', height: '60px' }} src={tomatoImage} alt='tomatinho' />);
						}
						return images;
					})()}
				</div>
				<div className='flex justify-center'>
					{sessionType === "Break" && (
						<div className='flex flex-col text-center'>
							<strong>Break</strong>
							<p className='text-center'>
								It's time to get a coffee &nbsp; <FreeBreakfast style={{ color: "white" }} />
							</p>
						</div>
					)}
					{sessionType === "Work" && (
						<div className='flex flex-col text-center'>
							<strong>Work</strong>
							<p className='text-center'>
								It's time to focus on work &nbsp;	<LaptopChromebook style={{ color: "white" }} />
							</p>
						</div>
					)}
					{sessionType === "Long Break" && (
						<div className='flex flex-col text-center'>
							<strong>LongBreak</strong>
							<p className='text-center'>
								If u want to get a nap now it's the time &nbsp;	<LocalHotel style={{ color: "white" }} />
							</p>
						</div>
					)}
				</div>
			</div>
			{/* <div className="flex flex-col w-full justify-between h-full" style={{ backgroundColor: 'red' }}>

				<div className='flex flex-col justify-center items-center'>


					<div>

					</div>
				</div>
			</div> */}
		</>
	)
}

export default Timer;