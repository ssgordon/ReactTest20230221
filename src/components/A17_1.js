//A17子元件
import React from "react";
export const myContext = React.createContext();

const Com1 = props => {
    const { count, setCount } = React.useContext(myContext);
    return (
        <div>
            Count: {count} <br />
            <button onClick={() => setCount(count + 1)}>count+1</button>
        </div>
    )
}

export default Com1;