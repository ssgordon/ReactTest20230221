import React from "react";
import { Route, Routes } from 'react-router-dom';
import R02 from './R02';
import R03 from './R03';
import R04 from './R04';
import R05 from './R05';

const R01 = () => {
    return (
        <>
            <div>
                Header
            </div>
            <Routes>
                <Route path="TEST/R02/*" element={<R02 />}></Route>
                <Route path="R03" element={<R03 />}></Route>
                <Route path="R04" element={<R04 />}></Route>
                <Route path="*" element={<R05 />}></Route>
            </Routes>
            <div>
                Footer
            </div>
        </>
    )
}

export default R01;