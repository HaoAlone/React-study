import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {fetch} from "whatwg-fetch"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BlogPostWithSubscription} from "./js/HocComponent/HOC";
import A from "./js/HocComponent/props proxy/ref 访问组件实例";
import Data from "./js/HocComponent/InheritanceInversion/renderJacking";
import App1 from "./js/HocComponent/ForwordRef/Transfer";
import HHH from "./js/HocComponent/ForwordRef/forwordRef";
import Routes from "./js/codespliting/Routes";
import Loadable from "./js/codespliting/loadable";
import ReactComponent from "./js/React/ReactChildren";
import Pure from "./js/React/pureComponent";
import Fd from "./js/React/ReactComponent";

const Context = React.createContext(
    {
        name:"132",
        toggle:()=>{}
    }
);

class ContextTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:""
        }
    }

    componentDidMount(){
        fetch("https://www.easy-mock.com/mock/5ab850e58552c322befb8658/user")
            .then(res=>{return res.json()})
            .then(data=>{this.setState({name:data.name})})
    }


    render() {
        return (
            <Context.Provider value={{name:this.state.name}}>
                <Test />
            </Context.Provider>
        )
    }
}

function Test(props){
    return (
        <Context.Consumer>
            {value=>{
                console.log(value)
                return <div>
                    {value.name}
                </div>
            }}
        </Context.Consumer>
    )
}

ReactDOM.render(
    <ContextTest />,
    document.getElementById('root')
);


serviceWorker.unregister();
