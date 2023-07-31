import React from "react";

class C03 extends React.Component {

    state = {
        username: '',
        password: ''
    }

    //組件掛完畢
    componentDidMount() {
        console.log('componentDidMount');
    }

    //組件將要卸載
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate(preProps, preState) {
        console.log('componentDidUpdate');
        console.log('preProps', preProps);
        console.log('preState', preState);
    }

    saveUserName = (event) => {
        this.setState({ username: event.target.value });
    }

    savePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    saveFormData = (dataType) => {
        return (event) => {
            this.setState({ [dataType]: event.target.value })
        }
    }

    saveFormData2 = (dataType, event) => {
        this.setState({ [dataType]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        console.log(`你輸入的用戶名是：${username},你輸入的密碼是：${password}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用戶名：<input onChange={this.saveFormData('username')} type="text" name="username" />
                密碼：<input onChange={event => this.saveFormData2('password', event)} type="password" name="password" />
                <button>登錄</button>
            </form>
        )
    }
}

export default C03;