import { WorkContext } from './contexts/work.context';
import { BreakContext } from './contexts/break.context';
import { LongBreakContext } from './contexts/longBreak.context';
import Timer from './Timer';
import Customizer from './Customizer';
import FlipCard from './components/FlipCard';

import "./App.css";
import './components/FlipCard/styles.css';


function App() {
	return (
		<div className="App">
			{/* <div className='container w-full flex justify-center'> */}
			{/* <FlipCard key="hoverCard" cardType='hover' BackContent={BackContent} FrontContent={FrontContent} /> */}

			{/* </div> */}
			<LongBreakContext>
				<BreakContext>
					<WorkContext>
						<div className='flex justify-center items-center h-screen' style={{ backgroundColor: '#dbdbdb' }}>
							<FlipCard key="clickCard" cardType='click' BackContent={Customizer} FrontContent={Timer} />
						</div>
						{/* <Timer />
						<Customizer /> */}
					</WorkContext>
				</BreakContext>
			</LongBreakContext>
		</div>
	);
}

export default App;