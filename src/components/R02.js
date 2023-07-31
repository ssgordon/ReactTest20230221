import React from "react";
import { Routes, Route } from "react-router-dom";
import R02_1 from "./R02_1";
import R02_2 from "./R02_2";
import R02_3 from "./R02_3";

const R02 = () => {
    return (
        <>
            <div>R02</div>
            <Routes>
                <Route element={<R02_3 />}>
                    <Route path="/R02_1" element={<R02_1 />}></Route>
                    <Route path="/R02_2" element={<R02_2 />}></Route>
                </Route>
                <Route path="/R02_2/R02_3" element={<R02_2 />}></Route>
            </Routes>
        </>
    )
}

export default R02;