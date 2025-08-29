
import './App.css';
import IncDecCounterClass from './Assignments/Assignment-1/IncDecCounterClass';
import IncDecCounterFunction from './Assignments/Assignment-1/IncDecCounterFunction';


//let a = "Rasha"
function App() {
  return (
    <div className="App">
      <h1>Assignment-1 Counter Application</h1>
      <div className="counter-row">
        <IncDecCounterClass />
        <IncDecCounterFunction />
      </div>

    </div>
  );
}

export default App;
