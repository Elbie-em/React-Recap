import './App.css';
import PressCounter from './components/PressCounter';
import SwipeCounter from './components/SwipeCounter';
import User from './components/User'

const App = () => {
  return (
    <div className="App">
      <br />
      <PressCounter />
      <br />
      <SwipeCounter />
      <br />
      <User name='React'/>
    </div>
  );
}

export default App;
