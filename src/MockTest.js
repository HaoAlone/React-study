import React , { Component } from "react"
import Mock from "mockjs"
import $ from "jquery"

class MockTest extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
        const  template = {
            'title': 'Syntax Demo',

            'string1|1-10': '★',
            'string2|3': 'value',

            'number1|+1': 100,
            'number2|1-100': 100,
            'number3|1-100.1-10': 1,
            'number4|123.1-10': 1,
            'number5|123.3': 1,
            'number6|123.10': 1.123,

            'boolean1|1': true,
            'boolean2|1-2': true,

            'object1|2-4': {
                '110000': '北京市',
                '120000': '天津市',
                '130000': '河北省',
                '140000': '山西省'
            },
            'object2|2': {
                '310000': '上海市',
                '320000': '江苏省',
                '330000': '浙江省',
                '340000': '安徽省'
            },

            'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
            'array2|1-10': ['Mock.js'],
            'array3|3': ['Mock.js'],

            'function': function() {
                return this.title
            }
        };
        Mock.mock("http://hello.json",template)
    }

    click = ()=>{
        $.ajax({
            type: "GET", //数据发送的方式（post 或者 get）
            url : "http://hello.json",//g,cn,
        }).done((data)=>{console.log(typeof data)})
    };

    render(){
        return(
            <div>
                <button onClick={this.click}>mock</button>
            </div>
        )
    }
}

export default MockTest