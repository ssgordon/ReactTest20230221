import React from 'react';

class A03 extends React.Component {
    render() {
        const { name, sex, age } = this.props
        return (
            <ul>
                <li>{ name }</li>
                <li> { sex } </li>
                <li> { age + 1 } </li>
            </ul>
        );
    };
}

export default A03;