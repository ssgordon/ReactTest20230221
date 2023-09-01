import React, { useState, useEffect, useRef, useReducer } from "react";

const FancyInput = React.forwardRef((props, ref) => {
    return (
        <>
            <div><input type="text" ref={ref} /></div>
        </>
    )
});

//useContext
const myContext = React.createContext();
const FancySection = () => {
    const { count, setCount } = React.useContext(myContext);
    return (
        <>
            {console.log('FancySection', count)}
            <FancyButton></FancyButton>
        </>
    )
}
const FancyButton = () => {
    const { count, setCount } = React.useContext(myContext);
    return (
        <>
            {console.log('FancyButton', count)}
            <div><button onClick={() => {setCount(count+1)}}>Add</button></div>
        </>
    )
}

const reducerFunc = (state, action) => {
    console.log('reducerFunc', state, action);
    switch (action.type) {
        case "reset":
            return { count: action.payload };
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    };
};
const initialStateValue = { count: 0 };
const initFunc = (initialStateValue) => {
    return { count: initialStateValue.count + 1 };
};

const R20 = (props) => {
    console.log('R20 init');
    //useState
    const [info, setInfo] = useState({a: '111', b: '222'});
    console.log('info', info);
    const [count, setCount] = useState(0);
    const handle = () => {
        setInfo({...info, a: '333'});
    };
    //useRef
    const myRef = useRef();
    let myRef2 = useRef(0);
    let myRef3 = 1;

    const handle3 = () => {
        console.log('myRef', myRef.current.value);
        myRef.current.value = '';
        myRef.current.focus();
        // console.log('myRef2', myRef2.current);
        // myRef2.current += 1;
        // console.log('myRef3', myRef3);
        // myRef3 += 1;
    }

    //forwardRef
    const fancyRef = useRef();
    const handle4 = () => {
        console.log(fancyRef.current.value);
        fancyRef.current.value = '';
        fancyRef.current.focus();
    }

    //useEffect
    const handle1 = () => {
        setCount(count);
    };
    const handle2 = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('useEffect init');
        // setCount(1);
        myRef2.current = count;
        return () => {
            console.log('useEffect unmount');
        };
    });
    const preCount = myRef2.current;

    //useReducer
    const [state, dispatch] = useReducer(reducerFunc, initialStateValue, initFunc);

    console.log('R20 end');
    return (
        <>
            {console.log("我渲染了2次")}
            <div>A20</div>
            <div>{info.a}</div>
            <div>{info.b}</div>
            <div>count: {count} pre: {preCount}</div>
            <button onClick={handle}>Add</button>&nbsp;&nbsp;
            <button onClick={handle1}>Add1</button>&nbsp;&nbsp;
            <button onClick={handle2}>Add2</button>
            <div><input type="text" ref={myRef} /></div>
            <button onClick={handle3}>Click</button>
            <FancyInput ref={fancyRef}></FancyInput>
            <button onClick={handle4}>Click</button>
            <div>count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'reset', payload: initialStateValue.count })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <div>
                <myContext.Provider value={{ count, setCount }}>
                    <FancySection>
                        <FancyButton></FancyButton>
                    </FancySection>
                </myContext.Provider>
            </div>
        </>
    )
}

export default R20;