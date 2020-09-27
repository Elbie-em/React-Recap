import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'


const App = () => {
  return (
    <div className="App">
      <Message />
      <Counter />
    </div>
  );
}

export default App;
