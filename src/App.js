import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div className="App">
      <Greet name="JavaScript" level="Root">
        <h3>I am a child H3 tag</h3>
      </Greet>
      <Greet name="React" level="Node">
        <button onClick={() => alert("I am a Child")}>I am a Child Button, Click Me</button>
      </Greet>
      <Greet name="Redux" level="Node"/>

      <Welcome name="Coding" level="Parent"/>
    </div>
  );
}

export default App;
