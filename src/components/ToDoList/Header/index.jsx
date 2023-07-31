import React from "react";
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'
import PubSub from 'pubsub-js'

class Header extends React.Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('輸入不能為空')
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        console.log(`id=${todoObj.id}`)
        this.props.addTodo(todoObj)
        PubSub.publish('atguigu', todoObj);

        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按回車鍵確認" />
            </div>
        )
    }
}

export default Header;