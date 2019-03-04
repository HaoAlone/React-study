import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import React from "react"
import loadable from "react-loadable"

function loading(props){
    console.log(props)
    if(props.error){
        return
    }
}

const Home = loadable({
    loader:()=>import("./Home"),
    loading: loading,//加载中
    timeout: 10000,//超时
    delay : 300,//延时 默认200毫秒 不到200毫秒显示null , 如果显示会有闪烁感，不如空白页
})