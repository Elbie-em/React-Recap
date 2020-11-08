import './App.css';
import UserGreeting from './components/UserGreeting'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCount';

const App = () => {
  return (
    <div className="App">
      <br />
      <HoverCounter />
      <br />
      <ClickCounter />
      <br />
    </div>
  );
}

export default App;
