import React from "react";
import './index.css'

class Item extends React.Component {

    state = {
        mouse: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleClick = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handleRemove = (id) => {
        return (event) => {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleClick(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger"
                    style={{ display: mouse ? 'block' : 'none' }}
                    onClick={this.handleRemove(id)}>刪除</button>
            </li>
        )
    }
}

export default Item;