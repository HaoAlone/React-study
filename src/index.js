import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BlogPostWithSubscription} from "./js/HocComponent/HOC";
import A from "./js/HocComponent/props proxy/ref 访问组件实例";
import Data from "./js/HocComponent/InheritanceInversion/renderJacking";
import App1 from "./js/HocComponent/ForwordRef/Transfer";
import HHH from "./js/HocComponent/ForwordRef/forwordRef";


ReactDOM.render(<HHH
    ref={(dom) => {
        console.log(dom);
    }}/>, document.getElementById('root'));


serviceWorker.unregister();
