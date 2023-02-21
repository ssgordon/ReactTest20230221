import React from 'react';

class A04 extends React.Component {
    myRef1 = React.createRef();
    myRef2 = React.createRef();

    showData = () => {
        // const { input1 } = this;
        // console.log('input1=', input1.value);
        console.log(this.myRef1.current.value);
    }
    showData2 = () => {
        // const { input2 } = this;
        // console.log('input2=', input2.value);
        console.log(this.myRef2.current.value);
    }

    saveInput1 = (c) => {
        this.input1 = c;
    }
    saveInput2 = (c) => {
        this.input2 = c;
    }

    render() {
        return (
            <div>
                <input ref={this.myRef1} type="text" placeholder="點擊按鈕提示數據"></input>
                <button onClick={ this.showData }>點我提示左側的數據</button>
                <input ref={this.myRef2} onBlur={ this.showData2 } type="text" placeholder="失去焦點提示數據"></input>
            </div>
        )
    }
}

export default A04