import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'


const App = () => {
  return (
    <div className="App">
      <EventBind />
      <br />
      <br />
      <FunctionClick />
      <br />
      <br />
      <ClassClick />
    </div>
  );
}

export default App;
