import { WorkContext } from './contexts/work.context';
import { BreakContext } from './contexts/break.context';
import { LongBreakContext } from './contexts/longBreak.context';
import Timer from './Timer';
import Customizer from './Customizer';
// import FlipCard from './components/FlipCard';

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
						{/* <FlipCard key="clickCard" cardType='click' BackContent={Timer} FrontContent={Customizer} /> */}
						<Timer />
						<Customizer />
					</WorkContext>
				</BreakContext>
			</LongBreakContext>
		</div>
	);
}

export default App;