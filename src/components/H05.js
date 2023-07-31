import React, { useEffect } from "react";
import Com1 from './H05_1'
import Com2 from './H05_2'

export const myContext = React.createContext();

function H05() {

    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log('useEffect');
    }, [])
    console.log({ count, setCount });

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <myContext.Provider value={{ count, setCount }}>
                <Com1>
                    <Com2></Com2>
                </Com1>
            </myContext.Provider>
            <br />
            <button onClick={handleClick}>加1</button>
        </>
    )
}

export default H05