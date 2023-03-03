import React, { useState, useEffect } from 'react';

const A13 = () => {
    const [count, setCount] = useState(0);
    const [userInfo, setUserInfo] = useState({
        name: 'test',
        age: 20
    });
    const countAction = (preCount, b) => preCount + b;
    const handleClick = () => {
        console.log(userInfo);
        setUserInfo({
            ...userInfo,
            name: 'test1'
        });
        console.log(userInfo);
    }
    const handleClick2 = () => {
        console.log(count);
        setCount(a => a + 1);
        console.log(count);
    }

    useEffect(() => {
        console.log('componentDidMount');
        // return () => {
        //     console.log('componentWillUnmount');
        // }
    }, []);

    return (
        <div>
            <span>{count}</span><br />
            <button onClick={() => setCount(countAction(count, 2))}>更新</button><br />
            <span>{userInfo.name}</span><br />
            <button onClick={() => handleClick()}>更新</button><br />
            <button onClick={() => handleClick2()}>更新2</button><br />
        </div>
    )
}

export default A13

