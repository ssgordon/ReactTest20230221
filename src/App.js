import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import PubSub  from 'pubsub-js';
import A01 from './components/A01.js';
import A02 from './components/A02.js';
import A03 from './components/A03.js';
import A04 from './components/A04.js';
import A05 from './components/A05.js';
import A06 from './components/A06.js';
import A07 from './components/A07.js';
import A08 from './components/A08.js';
import A09 from './components/A09.js';
import A11 from './components/A11.js';
import A12 from './components/A12.js';
import A13 from './components/A13.js';
import A14 from './components/A14.js';
import A15 from './components/A15.js';

import Header from './components/Header.js';
import List from './components/List.js';
import Footer from './components/Footer.js';

function App() {

  // useEffect(() => {
  //   /* 下面是 componentDidMount 和  componentDidUpdate */
  //   console.log('componentDidMount');
  //   /* 上面是 componentDidMount 和  componentDidUpdate */

  //   return () => {
  //     /* 下面是 componentWillUnmount */
  //     console.log('componentWillUnmount');
  //     /* 上面是 componentWillUnmount */
  //   };

  // });

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
      {/* <A01></A01>
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
      <br />
      <A06></A06>
      <br />
      <A07></A07>
      <A08></A08>
      <A09></A09>
      <A11></A11> */}
      {/* <A12></A12><br /> */}
      {/* <A13></A13> */}
      {/* <A14></A14> */}
      <A15></A15>
    </div>
  );
}

// class App extends React.Component {

//   state = {
//     todos: [
//       { id: '001', name: '吃飯', done: true },
//       { id: '002', name: '睡覺', done: true },
//       { id: '003', name: '打代碼', done: false },
//       { id: '004', name: '逛街', done: false }
//     ]
//   }

//   addTodo = (todoObj) => {
//     const { todos } = this.state;
//     const newTodos = [todoObj, ...todos]
//     this.setState({ todos: newTodos });
//   }

//   updateTodo = (id, done) => {
//     const { todos } = this.state
//     const newTodos = todos.map((todoObj) => {
//       if (todoObj.id === id) return { ...todoObj, done }
//       else return todoObj
//     })
//     console.log(this.state);
//   }

//   render() {
//     const { todos } = this.state
//     return (
//       <div className="todo-container">
//         <div className="todo-wrap">
//           <Header addTodo={this.addTodo} />
//           <List todos={todos} updateTodo={this.updateTodo} />
//           <Footer todos={todos} />
//         </div>
//       </div>
//     )
//   }
// }

export default App;
