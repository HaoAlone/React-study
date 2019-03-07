import React , { Component } from 'react';
import ReactDOM from 'react-dom';
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
import {Index} from "./js/Context";

class PP extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:1
        }
    }

    render() {
        return (
            <>
                <button onClick={()=>this.setState({num:this.state.num+1})}>点击</button>
                <Fd  num={this.state.num}/>
            </>

        );
    }
}

ReactDOM.render(
    <PP />,
    document.getElementById('root')
);


serviceWorker.unregister();
