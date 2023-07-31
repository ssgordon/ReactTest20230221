import React from "react";
import { Link } from 'react-router-dom';

const R05 = () => {
    return (
        <>
            <div>R05</div>
            <p>
                <Link to="TEST/R02/R02_1">R02_1</Link><br />
                <Link to="TEST/R02/R02_2/R02_3">R02_2</Link><br />
                <Link to="R03">R03</Link><br />
                <Link to="R04">R04</Link><br />
            </p>
        </>
    )
}

export default R05;