import React, { useCallback, useState, useMemo } from "react";

//子組件
let fn = null;
const A19_1 = ({ handleClick, count }) => {
    console.log('A19_1 reRender');
    console.log("callback 是否相同：", Object.is(fn, handleClick));
    fn = handleClick;
    return (
        <div>
            {console.log('A19_1 UI reRender')}
            Count: {count}
            <br/>
            <button onClick={() => { handleClick({a: 1, b: count}) }}>TEST</button>
        </div>
    )
}

// const A19_2 = React.memo(({ handleClick}) => {
//     console.log('A19_2 reRender');
//     return (
//         <div>
//             Count:0
//             <br />
//             <button onClick={() => { handleClick({ a: 1, b: 1 }) }}>TEST</button>
//         </div>
//     )
// },[])

const A19_2 = ({ handleClick}) => {
    console.log('A19_2 reRender');
    const child1 = useMemo(() => (
        <div>
            {console.log('A19_2 UI reRender')}
            Count:0
            <br />
            <button onClick={() => { handleClick({ a: 1, b: 1 }) }}>TEST</button>
        </div>
    ), [handleClick]);
    return (
        <React.Fragment>
            {child1}
        </React.Fragment>
    )
}

const A19_3 = ({num}) => {
    const memoizedCallback = useCallback(() => {
        return num;
    }, [num]);
    console.log('记忆 num > ', memoizedCallback())
    console.log('原始 num > ', num);
    return (
        <div> <p>TestUseCallback</p> </div>
    )
}

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    console.log('count', count);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </>
    );
}

const A19 = () => {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState({ a: 0, b: 0 });
    // const handleClick = useCallback((data) => {
    //     console.log('data', data);
    // }, []);
    const handleClick = (data) => {
        console.log('data', data);
        setInfo({
            ...info,
            a: data.a,
            b: data.b
        })
    }
    console.log('A19 reRender');
    return (
        <div>
            <A19_1 handleClick={handleClick} count={count}></A19_1>
            <br />
            <A19_2 handleClick={handleClick}></A19_2>
            <br />
            <A19_3 num={count}></A19_3>
            <div>a: {info.a}, b: {info.b}</div>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
            <br />
            <Counter initialCount={0}></Counter>
        </div>
    )
}

export default A19