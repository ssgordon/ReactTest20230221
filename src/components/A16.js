//使用useReducer
import React, { useReducer } from "react";

const Counter = ({ initialCount }) => {
    // console.log('initialCount', initialCount);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'reset':
                return { count: action.payload }
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            default:
                return state
        }
    }
    const init = (initialCountState1) => {
        console.log('initialCountState', initialCountState1);
        return { count: initialCountState1.count + 1 };
    }
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <React.Fragment>
            Count: { state.count }
            <button onClick={() => dispatch({ type: 'reset', payload: initialCount.count })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </React.Fragment>
    )
}

const A16 = () => {
    return (
        <Counter initialCount={{ count: 1 }}></Counter>
    )
}

export default A16;