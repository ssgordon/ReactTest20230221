import React from 'react';
import aaa, { b } from './A10.js';

class A09 extends React.Component {
    state = {
        persons: [
            { id: 1, name: '小張', age: 18 },
            { id: 2, name: '小李', age: 19 }
        ]
    }
    add = () => {
        console.log(this.state);
        const { persons } = this.state;
        const p = { id: persons.length + 1, name: '小王', age: 20 };
        this.setState({ persons: [p, ...persons]});
    }
    render() {
        console.log('aaa', aaa);
        console.log('b', b);
        return (
            <div>
                <h2>展示人員信息</h2>
                <button onClick={this.add}>添加一個小王</button>
                <h3>使用index（索引值）作為key</h3>
                <ul>
                    {
                        this.state.persons.map((personObj, index) => {
                            return <li key={index}>{personObj.name}
                                ---{ personObj.age }<input type="text"></input></li>
                        })
                    }
                </ul>
                <hr />
                <hr />
                <h3>使用id（數據的唯一標識）作為key</h3>
                <ul>
                    {
                        this.state.persons.map((personObj, index) => {
                            return <li key={personObj.id}>{personObj.name}
                                ---{personObj.age}<input type="text"></input></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default A09