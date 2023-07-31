//useReducer + useContext
import React from "react";
import { ContextProvider } from "./A18_1";
import Counter from "./A18_2";
import CounterTest from "./A18_3";

const A18 = () => {
    return (
        <div>
            <ContextProvider>
                <Counter/>
                <CounterTest/>
            </ContextProvider>
        </div>
    )
}

export default A18;
