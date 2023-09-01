import React, { useState, useEffect } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import R01 from './components/R01.js'
import A20 from './components/A20.js'

// import PubSub from 'pubsub-js'
// import Header from './components/ToDoList/Header'
// import List from './components/ToDoList/List'
// import Footer from './components/ToDoList/Footer'

// function App() {
//     return (
//         <C01 name="jerry" age={19} sex="男"></C01>
//     );
// }

function App() {
    return (
        <BrowserRouter>
            {/* <R01 /> */}
            <A20/>
        </BrowserRouter>
        // <HashRouter>
        //     <R01 />
        // </HashRouter>
    );
}

// class App extends React.Component {

//     //初始化狀態
//     state = {
//         todos: [
//             { id: '001', name: '吃飯', done: true },
//             { id: '002', name: '睡覺', done: true },
//             { id: '003', name: '打代碼', done: false },
//             { id: '004', name: '逛街', done: false }
//         ]
//     }

//     componentDidMount() {
//         console.log('componentDidMount');
//         this.token = PubSub.subscribe('atguigu', (msg, stateObj) => {
//             // this.setState(stateObj)
//             console.log('atguigu', msg, stateObj);
//         })
//     }

//     componentWillUnmount() {
//         PubSub.unsubscribe(this.token)
//     }

//     addTodo = (todoObj) => {
//         const { todos } = this.state
//         const newTodos = [todoObj, ...todos]
//         this.setState({ todos: newTodos })
//     }

//     updateTodo = (id, done) => {
//         const { todos } = this.state
//         const newTodos = todos.map((todoObj) => {
//             if (todoObj.id === id) return { ...todoObj, done }
//             else return todoObj
//         })
//         this.setState({ todos: newTodos });
//     }

//     deleteTodo = (id) => {
//         const { todos } = this.state
//         const newTodos = todos.filter((todoObj) => {
//             return todoObj.id !== id
//         })
//         this.setState({ todos: newTodos });
//     }

//     checkAllTodo = (done) => {
//         //獲取原來的todos
//         const { todos } = this.state
//         //加工數據
//         const newTodos = todos.map((todoObj) => {
//             return { ...todoObj, done }
//         })
//         //更新狀態
//         this.setState({ todos: newTodos })
//     }

//     clearAllDone = () => {
//         //獲取原來的todos
//         const { todos } = this.state
//         //過濾數據
//         const newTodos = todos.filter((todoObj) => {
//             return !todoObj.done
//         })
//         //更新狀態
//         this.setState({ todos: newTodos })
//     }

//     render() {
//         const { todos } = this.state;
//         return (
//             <div className="todo-container">
//                 <div className="todo-wrap">
//                     <Header addTodo={this.addTodo} />
//                     <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
//                     <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}  />
//                 </div>
//             </div>
//         )
//     }
// }

export default App;