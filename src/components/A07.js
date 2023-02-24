import React from 'react';

class A07 extends React.Component {
    // saveUserName = (event) => {
    //     this.setState({ userName: event.target.value });
    // };
    // savePassword = (event) => {
    //     this.setState({ password: event.target.value });
    // };
    saveFormData = (dataType) => {
        return (event) => {
            this.setState({[dataType]: event.target.value});
        };
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const { userName, password } = this.state;
        console.log(this);
        console.log(`帳號:${userName}密碼:${password}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用戶名:<input onChange={this.saveFormData('userName')} type="text" name="username"></input>
                密碼:<input onChange={this.saveFormData('password')} type="password" name="password"></input>
                <button>登錄</button>
            </form>
        );
    }
}

export default A07
