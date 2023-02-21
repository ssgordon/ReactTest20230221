import React from 'react';

class A05 extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this;
        console.log(`你輸入的用戶名是：${username.value},你輸入的密碼是：${password.value}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用戶名:<input ref={c => this.username = c} type="text" name="username"></input>
                密碼:<input ref={c => this.password = c} type="password" name="password"></input>
                <button>登錄</button>
            </form>
        )
    }
}

export default A05