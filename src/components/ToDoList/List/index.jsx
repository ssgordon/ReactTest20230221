import React from "react";
import PropTypes from 'prop-types'
import Item from "../Item"
import './index.css'

class List extends React.Component {
    render() {
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}

export default List;