import React from 'react'
import logo from './logo.svg';
import './App.css';
import A01 from './components/A01.js';
import A02 from './components/A02.js';
import A03 from './components/A03.js';
import A04 from './components/A04.js';
import A05 from './components/A05.js';
import A06 from './components/A06.js';
import A07 from './components/A07.js';
import A08 from './components/A08.js';
import A09 from './components/A09.js';

import Header from './components/Header.js';
import List from './components/List.js';
import Footer from './components/Footer.js';

// function App() {
//   const p = { name: '老劉', age: 18, sex: '女' };
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//       {/* <A01></A01>
//       <br />
//       <A02></A02>
//       <br />
//       <A03 name="jerry" age={19} sex="男"></A03>
//       <A03 name="tom" age={18} sex="男"></A03>
//       <A03 {...p}></A03>
//       <br />
//       <A04></A04>
//       <br />
//       <A05></A05>
//       <br />
//       <A06></A06>
//       <br />
//       <A07></A07>
//       <A08></A08>
//       <A09></A09> */}

//     </div>
//   );
// }

class App extends React.Component {

  state = {
    todos: [
      { id: '001', name: '吃飯', done: true },
      { id: '002', name: '睡覺', done: true },
      { id: '003', name: '打代碼', done: false },
      { id: '004', name: '逛街', done: false }
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos });
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    console.log(this.state);
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} />
          <Footer todos={todos} />
        </div>
      </div>
    )
  }
}

export default App;
