//使用useContext
import React, { useState } from "react";
import Com1, { myContext } from "./A17_1.js"

const A17 = () => {
    const [count, setCount] = useState(0);
    return (
        <myContext.Provider value={{ count, setCount }}>
            <div>
                <Com1 />
            </div>
        </myContext.Provider>
    )
}

export default A17;