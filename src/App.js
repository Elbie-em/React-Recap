import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'


const App = () => {
  return (
    <div className="App">
      <FunctionClick />
      <br />
      <br />
      <ClassClick />
    </div>
  );
}

export default App;
