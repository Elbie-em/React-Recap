import './App.css';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/userContext';


const App = () => {
  return (
    <div className="App">
      <UserProvider value="Kranium">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
