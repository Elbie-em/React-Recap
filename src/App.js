import logo from './logo.svg';
import './App.css';
import { HelloJSX, HelloNonJSX } from './components/Hello'

const App = () => {
  return (
    <div className="App">
      <HelloJSX />
      <HelloNonJSX />
    </div>
  );
}

export default App;
