import React from 'react';

const A12 = () => {
    const [count, setCount] = React.useState(0);
    const countAction = (preCount, b) => preCount + b;
    return (
        <div>
            <span>{count}</span><br />
            <button onClick={() => setCount(countAction(count, 2))}>更新</button>
        </div>
    )
}

export default A12

