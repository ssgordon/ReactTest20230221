import React, { useContext } from "react";
import { myContext } from "./A18_1";

const Counter = () => {
    const { state, dispatch } = useContext(myContext);
    return (
        <div>
            Counter Count: {state.count}
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    )
}

export default Counter