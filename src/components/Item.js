import React from 'react';

class Item extends React.Component {
    state = { mouse: false }

    //鼠標移入、移出的回調
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button style={{display: mouse ? 'block' : 'none'}}>刪除</button>
            </li>
        )
    }
}

export default Item