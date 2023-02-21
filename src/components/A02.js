import React from 'react';

class A02 extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = { isHot: false, wind: '微風' };
        // this.changeWeather = this.changeWeather.bind(this);
    }

    // changeWeather() {
    //     console.log('changeWeather');
    //     const isHot = this.state.isHot;
    //     this.setState({ isHot: !isHot });
    //     console.log(this);
    // }

    changeWeather = () => {
        console.log('changeWeather');
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot });
        console.log(this);
    }

    render() {
        console.log('render this', this);
        const { isHot, wind } = this.state;
        return (
            <h1 onClick={ this.changeWeather }>今天天氣很{isHot ? '炎熱' : '涼爽'}，{ wind }</h1>
        )
    }
}

export default A02;