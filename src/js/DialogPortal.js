import React , { Component } from "react"
import {createPortal} from "react-dom"
import styles from "../css/dialogPortal.module.css"

export default class DialogPortal extends Component{
    constructor(props){
        super(props);
        const doc = window.document;
        this.node = document.createElement("div");
        doc.body.appendChild(this.node)
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }

    render(){
        return  createPortal(
            <div className={styles.dialog}>
                {this.props.children}
            </div>
            ,
            this.node
        )
    }
}