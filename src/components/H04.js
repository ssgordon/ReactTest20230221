import React, { useEffect, useReducer } from "react";

function H04() {

    // const [state, dispatch] = useReducer(reducerFunc, initialStateValue, initFunc);

    // const initialCountState = { count: 0 };

    function reducer(state, action) {
        console.log('reducer', state, action);
        switch (action.type) {
            case "reset":
                return { count: action.payload };
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                return state;
        }
    }

    function init(initialCountState) {
        console.log('init', initialCountState);
        return { count: initialCountState.count + 1 };
    }

    function Count({ initialCount }) {
        console.log('initialCount', initialCount);

        const [state, dispatch] = useReducer(reducer, initialCount, init);

        return (
            <React.Fragment>
                Count: {state.count}
                <button onClick={() => dispatch({ type: "reset", payload: initialCount.count })}>
                    Reset
                </button>
                <button onClick={() => dispatch({ type: "increment" })}>+</button>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            </React.Fragment>
        )
    }

    // useEffect(() => {
    //     console.log('useEffect');
    //     return () => {
    //     }
    // }, [])

    return (
        <div>
            <Count initialCount={{count: 1}}></Count>
        </div>
    )
}

export default H04