import React from "react";

class C02 extends React.Component {
    myRef = React.createRef();
    myRef2 = React.createRef();
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            isHot: false,
            wind: '微風'
        }
        // this.changeWeather = this.changeWeather.bind(this);
    }
    render() {
        // const { isHot, wind } = this.state;
        // return <h1 onClick={this.changeWeather}>今天天氣很{isHot ? '炎熱' : '涼爽'}，{ wind }</h1>

        // const { name, sex, age } = this.props;
        // return (
        //     <ul>
        //         <li>姓名：{name}</li>
        //         <li>性別：{sex}</li>
        //         <li>年齡：{age + 1}</li>
        //     </ul>
        // )
        const { info } = this.state;
        return (
            <div>
                {/* <input ref="input1" type="text" placeholder="點擊按鈕提示數據" />&nbsp; */}
                <input ref={ this.myRef } type="text" placeholder="點擊按鈕提示數據" />&nbsp;
                <button onClick={this.showData}>點我提示左側的數據</button>&nbsp;
                {/* <input ref={c => { this.input2 = c; console.log('@', c); }} onBlur={this.showData2} type="text" placeholder="失去焦點提示數據" /> */}
                <input ref={this.saveInput} onBlur={this.showData2} type="text" placeholder="失去焦點提示數據" />
                <p>{info}</p>
            </div>
        )
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

    showData = () => {
        console.log('showData1');
        // const { input1 } = this.refs;
        const input1 = this.myRef.current;
        console.log(input1.value);
    }

    showData2 = () => {
        console.log('showData2');
        const { input2 } = this;
        console.log(input2.value);
        this.setState({ info: 'test1234' });
    }

    showInfo = () => {
        const { input1 } = this
        alert(input1.value)
    }

    saveInput = (c) => {
        this.input2 = c;
        // console.log('@', c);
    }
}

export default C02