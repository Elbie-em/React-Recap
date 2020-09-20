import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

const App = () => {
  return (
    <div className="App">
      <Greet name="JavaScript" level="Root"/>
      <Greet name="React" level="Node"/>
      <Greet name="Redux" level="Node"/>
    </div>
  );
}

export default App;
