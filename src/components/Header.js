import React from 'react';

class Header extends React.Component {
    handleKeyUp = (event) => {
        //解構賦值獲取keyCode,target
        const { keyCode, target } = event
        //判斷是否是回車按鍵
        if (keyCode !== 13) return
        //添加的todo名字不能為空
        if (target.value.trim() === '') {
            alert('輸入不能為空')
            return
        }
        //準備好一個todo物件
        const todoObj = {
            id: (new Date()).getTime(),
            name: target.value,
            ddone: false
        };
        //將todoObj傳遞給App
        this.props.addTodo(todoObj)
        //清空輸入
        target.value = ''
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='請輸入你的任務名稱，按回車鍵確認' />
            </div>
        )
    }
}

export default Header