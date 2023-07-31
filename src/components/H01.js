import React, { useState, useEffect } from "react";

function H01() {
    console.log('H01');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        return () => {

        }
    })
    return (
        <div>
            <h1>
                Now: {count}
            </h1>
            {console.log("畫面渲染")}
            <button onClick={() => setCount(count + 1)}>更新count</button>
        </div>
    )
}

export default H01