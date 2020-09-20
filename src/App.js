import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

const App = () => {
  return (
    <div className="App">
      <Greet name="JavaScript"/>
      <Greet name="React"/>
      <Greet name="Redux"/>
    </div>
  );
}

export default App;
