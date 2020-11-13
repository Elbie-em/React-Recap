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
      <User render={(isLoggedIn) => isLoggedIn ? 'React' : 'Guest'}/>
    </div>
  );
}

export default App;
