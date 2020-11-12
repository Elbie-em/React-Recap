import './App.css';
import PressCounter from './components/PressCounter';
import SwipeCounter from './components/SwipeCounter';

const App = () => {
  return (
    <div className="App">
      <br />
      <PressCounter />
      <br />
      <SwipeCounter />
    </div>
  );
}

export default App;
