import './App.css';
import CountPS from './components/CountPS';
import PressCounter from './components/PressCounter';
import SwipeCounter from './components/SwipeCounter';
import User from './components/User'

const App = () => {
  return (
    <div className="App">
      <CountPS render={(count, incrementCount) => 
        <PressCounter count={count} incrementCount={incrementCount}/>
      }/>
      <CountPS render={(count, incrementCount) => 
        <SwipeCounter count={count} incrementCount={incrementCount}/>
      }/>
      {/* <br />
      <PressCounter />
      <br />
      <SwipeCounter />
      <br />
      <User render={(isLoggedIn) => isLoggedIn ? 'React' : 'Guest'}/> */}
    </div>
  );
}

export default App;
