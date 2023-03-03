import React, { useState, useEffect, useRef, useCallback } from "react";
import FancyButton from './FancyButton.js'

const A15 = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);
    const inputE1 = useRef();
    const handleClick = () => {
        console.log(inputE1.current.value);
        inputE1.current.disabled = true
    }

    useEffect(() => {
        prevCountRef.current = count;
    });

    const prevCount = prevCountRef.current;
    const ref = React.createRef();

    const handleClick2 = useCallback(() => {
        console.log('handleClick2');
    })

    return (
        <div>
            <input ref={inputE1} type="text" /><br />
            <button onClick={handleClick}>取值</button>
            <br /><br />
            <h1>
                Now:{count}, before: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>更新count</button>
            <br />
            <br />
            <FancyButton ref={ref}>Click me!</FancyButton>
        </div>
    )
}

export default A15