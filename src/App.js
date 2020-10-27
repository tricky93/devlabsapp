import logo from './logo.svg';
import './App.css';
import {Recipe} from './Recipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          CookPad
        </h1>
      </header>
      <Recipe/>
    </div>
  );
}

export default App;
