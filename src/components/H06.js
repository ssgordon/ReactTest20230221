import React, { useEffect } from "react";

function H06() {

    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log('useEffect');
    }, [])

    // const handleCount = () => {
    //     setCount(count + 1)
    // }

    // const handleCount = React.useCallback(() => {
    //     console.log('handleCount');
    //     setCount(count + 1)
    // })

    const handleCount = React.useMemo(() => {
        console.log('handleCount');
        // setCount(count + 1)
    });

    return (
        <div>
            <p>Count: {count}</p>
            <p>
                <button onClick={handleCount}>計數</button>
            </p>
        </div>
    )
}

export default H06