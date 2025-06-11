import logo from './logo.svg';
import './App.css';

function App() {

  // const name = 'Hamza';
  const handleNameChange= () => {
    const names = ['Hamza', 'Ali', "Ahmad"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello {[1,2,3]}</p>{/* can pass array, number, str, not boolean or object */}
        <p>Hello {handleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
