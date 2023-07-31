import React from "react";

// function B01() {
//     //模擬一些數據
//     const data = ['Angular', 'React', 'Vue'];
//     console.log(this);
//     return (
//         <div>
//             <ul>
//                 {
//                     data.map((item, index) => {
//                         return <li key={index}>{ item }</li>
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }

class B01 extends React.Component {
    input1 = React.createRef();
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = { isHot: false, wind: '微風', username: '', password: '' };
        console.log(props);

    }
    render() {
        console.log('render');
        //讀取狀態
        const { isHot, wind } = this.state;
        return (
            <div>
                <h1 onClick={this.changeWeather}>今天天氣很{isHot ? '炎熱' : '涼爽'}，{wind}</h1><br />
                <input ref={this.input1 } type="text" />
                <button onClick={this.showData}>顯示資料</button><br />
                <form onSubmit={this.handleSubmit}>
                    {/* 用戶名:<input ref={c => this.username = c} type="text" name="username"></input>
                    密碼:<input ref={c => this.password = c} type="password" name="password"></input> */}
                    用戶名:<input onChange={this.saveUsername}  type="text" name="username"></input>
                    密碼:<input onChange={this.savePassword}  type="password" name="password"></input>
                    <button>登入</button>
                </form>
            </div>
        );
    }

    changeWeather = () => {
        console.log('changeWeather');
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot });
        console.log(this);
        console.log(this.__proto__);
    }

    showData = () => {
        console.log(this);
        // const { input1 } = this;
        // alert(input1.value);
        alert(this.input1.current.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const { username, password } = this;
        console.log(this.state);
        const { username, password } = this.state;
        alert(`你輸入的用戶名是：${username},你輸入的密碼是：${password}`);

    }

    saveUsername = (event) => {
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    savePassword = (event) => {
        this.setState({ password: event.target.value });
    }
}


export default B01;