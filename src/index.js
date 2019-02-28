import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MockTest from "./MockTest";
import TimeOut from "./TimeOut";
import FetchTest from "./FetchTest"
import Box from "./js/Context"
import {withTheme} from "./js/ContextHOC";
import Fragment from "./js/Fragment/Fragment";
import App1 from "./js/Portal";
import DialogPortal from "./js/DialogPortal";

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div id={"1"}>{items}</div>;
}

function ListOfTenThings() {
    let a = document.querySelector("#exam");
    a.style.color = "red"
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}


ReactDOM.render(<DialogPortal >123</DialogPortal>, document.getElementById('app-root'));


serviceWorker.unregister();
