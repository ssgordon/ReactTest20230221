import React from 'react';
import ReactDOM from 'react-dom/client';

class A08 extends React.Component {
    state = { opacity: 1 };
    death = () => {
        //卸載組件
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        this.componentWillUnmount();
    };
    //組件掛完畢
    componentDidMount() {
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            let { opacity } = this.state;
            opacity -= 0.1;
            if (opacity <= 0) opacity = 1;
            this.setState({ opacity });
        }, 200);
    }
    //組件將要卸載
    componentWillUnmount() {
        //清除定時器
        clearInterval(this.timer);
    }
    render() {
        console.log('render');
        return (
            <div>
                <h2 style={{ opacity: this.state.opacity }}>React學不會怎麼辦？</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}

export default A08
