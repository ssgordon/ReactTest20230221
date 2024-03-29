import React from "react";
import './index.css'

class Footer extends React.Component {

    //全選checkbox的回調
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    //清除已完成任務的回調
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll}
                        checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任務</button>
            </div>
        )
    }
}

export default Footer;