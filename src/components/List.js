import React from 'react';
import Item from './Item.js';

class List extends React.Component {
    render() {
        const { todos, updateTodo } = this.props;
        return (
            <ul>
                {
                    todos.map(todo => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo}></Item>
                    })
                }
            </ul>
        )
    }
}

export default List