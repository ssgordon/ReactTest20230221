import logo from './logo.svg';
import './App.css';
import A01 from './components/A01.js';
import A02 from './components/A02.js';
import A03 from './components/A03.js';
import A04 from './components/A04.js';
import A05 from './components/A05.js';

function App() {
  const p = { name: '老劉', age: 18, sex: '女' };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <A01></A01>
      <br />
      <A02></A02>
      <br />
      <A03 name="jerry" age={19} sex="男"></A03>
      <A03 name="tom" age={18} sex="男"></A03>
      <A03 {...p}></A03>
      <br />
      <A04></A04>
      <br />
      <A05></A05>
    </div>
  );
}

export default App;
