import Timer from './Timer';
import Customizer from './Customizer';

import "./App.css";

function App() {
    return (
        <div className="App">
            <Customizer>
                <Timer />
            </Customizer>
        </div>
    );
}

export default App;