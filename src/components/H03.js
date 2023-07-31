import React, { useState, useEffect, useRef } from "react";

function H03() {
    // const myRef = useRef();
    // const buttonRef = useRef();

    // var handleClick = (event) => {
    //     if (myRef.current.value === '') {
    //         console.log('need input');
    //         myRef.current.focus();
    //     }
    //     // buttonRef.current.innerText = '送出2';
    //     // console.log(myRef.current.value);
    // }
    console.log("H3 Start");
    const [count, setCount] = useState(0);
    const preCountRef = useRef(0);
    const fancyRef = useRef();

    useEffect(() => {
        preCountRef.current = count;
        console.log("useEffect更新");
    })
    console.log("保留count值")
    const prevCount = preCountRef.current;

    const FancyButton = React.forwardRef((props, ref) => (
        <div>
            <input ref={ref} />
            <button className="FancyButton">{props.children}</button>
        </div>
    ));

    const handleClick = React.useCallback(() => fancyRef.current.focus(), []);

    return (
        // <div>
        //     <input type="text" ref={myRef} />
        //     <button ref={buttonRef} onClick={handleClick}>送出</button>
        // </div>
        <div>
            <h1>
                Now: {count}, before: {prevCount}
            </h1>
            {console.log("畫面渲染")}
            <button onClick={() => setCount(count + 1)}>更新count</button>
            <br/>
            <FancyButton ref={fancyRef}>Click me</FancyButton>
            <button onClick={handleClick}>獲得焦點</button>
        </div>
    )
}

export default H03