import React, { useContext, useState, useEffect } from "react";

const myContext = React.createContext();

const A17T_1 = () => {
    // console.log(React.useContext(myContext));
    const { count } = React.useContext(myContext);
    const [count1, setCount1] = useState(0);
    const [form, setForm] = useState({ firstName: '111'});
    const handleClick = () => {
        // form.firstName = '456';
        // console.log(form);
        setForm({
            ...form,
            firstName: '456'
        })
    }
    useEffect(() => {
        console.log('componentDidUpdate');
        setCount1(count => count + 1);
        return () => {
            console.log('componentWillUnmount');
        }
    }, [form]);
    return (
        <div>
            <div>
                Count: {count}
            </div>
            <div>
                Count1: {count1}
            </div>
            <div>FirstName: {form.firstName}</div>
            <div>
                <button onClick={() => { handleClick(); }}>Count + 1</button>
            </div>
        </div>

    )
}

const A17T_2 = () => {
    // console.log(React.useContext(myContext));
    const { count } = React.useContext(myContext);
    return (
        <div>Count: {count}</div>
    )
}

const A17T = () => {
    return (
        <React.Fragment>
            <myContext.Provider value={{count: 3}}>
                <A17T_1></A17T_1>
            </myContext.Provider>
                <br />
            <myContext.Provider value={{ count: 2 }}>
                <A17T_2></A17T_2>
            </myContext.Provider>

        </React.Fragment>
    )
}

export default A17T;