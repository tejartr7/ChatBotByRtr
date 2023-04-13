import logo from './logo.svg';
import { Options } from './components/Options.jsx';
import { Translation } from './components/Translation.jsx';
import { array } from './components/Aioptions/items';
import './App.css';

function App() {
  return (
    <div className="App">
      <Options array={array}/>
    </div>
  );
}

export default App;
