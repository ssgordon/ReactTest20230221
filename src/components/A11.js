import React from 'react';
import axios from 'axios'

class A11 extends React.Component {
    queryData = () => {
        console.log('queryData');
        // console.log(axios);
        // axios.get('https://www.irentcar.com.tw/')
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         console.log('finally');
        //     })
        axios.post('https://www.irentcar.com.tw/EasyrentService2019/api/Exec/ProjectOutDate', { PRORFNBR: 0, Token: '' })
            .then((res) => {
                console.log(res.data);
                if (res.data.RESULT) {
                    console.log(true);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('finally');
            })
    }
    render() {
        return (
            <div>
                <button onClick={this.queryData}>查詢資料</button>
            </div>
        )
    }
}

export default A11