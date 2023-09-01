import React from "react";
import { Link, NavLink, Navigate, Route, Routes, useh } from 'react-router-dom';
import R02 from './R02';
import R03 from './R03';
import R04 from './R04';
import R05 from './R05';
import R06 from './R06';
import R06_1 from './R06_1';
import R06_2 from './R06_2';

const MyNavLink = (props) => {
    return (
        <NavLink {...props}>{ props.children }</NavLink>
    )
}

const R01 = (props) => {
    console.log('R01', props);
    return (
        <>
            <div>
                Header&nbsp;&nbsp;
                <Link replace to="R03/1234?a=111&b=222" state={{title: 'AAA', id: 111}}>R03</Link>&nbsp;&nbsp;
                <Link to="R04">R04</Link>&nbsp;&nbsp;
                <MyNavLink to="R03/5678?a=333&b=444">R03</MyNavLink>&nbsp;&nbsp;
                <MyNavLink to="R04">R04</MyNavLink>&nbsp;&nbsp;
                <MyNavLink to="/R03/Test/TTTT">R03</MyNavLink>&nbsp;&nbsp;
                <MyNavLink to="/Test/R03">R03</MyNavLink>&nbsp;&nbsp;
                <MyNavLink to="/R06/R06_1">R06_1</MyNavLink>&nbsp;&nbsp;
            </div>
            <Routes>
                <Route path="TEST/R02/*" element={<R02 />}></Route>
                <Route path="/R03/:id" element={<R03>Test /R03/:id</R03>}></Route>
                <Route path="/R03" element={<R03>Test /R03</R03>}></Route>
                <Route path="/R03/:id/:title" element={<R03>Test /R03</R03>}></Route>
                <Route path="/R04" element={<R04 />}></Route>
                <Route path="/R06/*" element={<R06 />}>
                    <Route path="R06_1" element={<R06_1 />}></Route>
                    <Route path="R06_2" element={<R06_2 />}></Route>
                </Route>
                {/* <Route path="*" element={<R05 />}></Route> */}
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
            <div>
                Footer
            </div>
        </>
    )
}

export default R01;