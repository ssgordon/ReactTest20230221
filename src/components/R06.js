import React from "react";
import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import R06_1 from './R06_1';
import R06_2 from './R06_2';

const R06 = () => {
    return (
        <>
            <div>R06</div>
            <div>
                <Link to="R06_1">R06_1</Link>&nbsp;&nbsp;
                <Link to="R06_2">R06_2</Link>&nbsp;&nbsp;
            </div>
            {/* <Routes>
                <Route path="R06_1" element={<R06_1 />}></Route>
                <Route path="R06_2" element={<R06_2 />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes> */}
            <div>XXXXXXXXXXXXXX</div>
            <Outlet></Outlet>
        </>
    );
}

export default R06;