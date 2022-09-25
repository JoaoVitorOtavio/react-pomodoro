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
        back: "Back"
    },
    {
        id: "2",
        variant: "click",
        front: "Click",
        back: "Back"
    },
    {
        id: "3",
        variant: "focus",
        front: "Focus",
        back: "Back"
    }
];

function App() {
    return (
        <div className="App">
            <div className='container w-full flex justify-center'>
                {cards.map((card) => (
                    <FlipCard key={card.id} card={card} />
                ))}

            </div>
            {/* <Customizer>
                <Timer />
            </Customizer> */}
        </div>
    );
}

export default App;