import Timer from './Timer';
import Customizer from './Customizer';
import FlipCard from './components/FlipCard';

import "./App.css";
import './components/FlipCard/styles.css';

const cards = [
    {
        id: "1",
        variant: "hover",
        front: "Hover",
        back: "Back",
        cardType: "hover"
    },
    {
        id: "2",
        variant: "click",
        front: "Click",
        back: "Back",
        cardType: "click"
    },
];

const FrontContent = () => {
    return (
        <p>
            Front<b>Content</b>
        </p>
    )
}
const BackContent = () => {
    return (
        <p>
            Back<b>Content</b>
        </p>
    )
}

function App() {
    return (
        <div className="App">
            {/* <div className='container w-full flex justify-center'> */}
            {/* <FlipCard key="clickCard" cardType='click' BackContent={BackContent} FrontContent={FrontContent} /> */}
            {/* <FlipCard key="hoverCard" cardType='hover' BackContent={BackContent} FrontContent={FrontContent} /> */}

            {/* </div> */}
            <Customizer>
                <Timer />
            </Customizer>
        </div>
    );
}

export default App;