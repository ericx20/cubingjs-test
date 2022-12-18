import logo from './logo.svg';
import './App.css';

import { random333State } from "cubing/search"
import { experimentalSolve3x3x3IgnoringCenters } from "cubing/search";
import { KState } from "cubing/kpuzzle"

async function generateEOSolvedScramble() {
  const { kpuzzle, stateData } = await random333State()
  const newStateData = {
    ...stateData,
    EDGES: {
      // TODO: make this an n-flip array
      orientation: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      pieces: stateData.EDGES.pieces
    }
  }
  const newPuzzle = new KState(kpuzzle, newStateData)
  const solution = await experimentalSolve3x3x3IgnoringCenters(newPuzzle)
  return solution.invert()
}

console.log(generateEOSolvedScramble().toString())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
