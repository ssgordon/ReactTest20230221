import React, { useEffect, useContext } from "react";
import { myContext } from './H05'

function H05_2() {
    console.log('myContext', myContext);
    var { count, setCount } = React.useContext(myContext);

    useEffect(() => {
        console.log('useEffect');
    }, [])

    return (
        <div>
            Test:{count}
        </div>
    )
}

export default H05_2