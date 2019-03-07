import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import React from "react"
import loadable from "react-loadable"
import {Card} from "antd"

function withLoadable (comp) {
    return loadable({
        loader:comp,
        loading:(props)=>{
            if (props.error) {
                return <Card style={{width:"100%",height:"100%"}} onClick={props.retry} >
                    加载错误。请刷新
                </Card>;
            } else if (props.timedOut) {
                return <Card style={{width:"100%",height:"100%"}} onClick={props.retry} >
                    加载超时。请刷新
                </Card>;
            } else if (props.pastDelay) {
                return <Card loading={true} style={{width:"100%",height:"100%"}} />;
            } else {
                return null;
            }
        },
        timeout:10000,
        delay : 300
    })
}

const Home = withLoadable(()=>import("./Home"));
const About = withLoadable(()=>import("./About"));
const Content = withLoadable(()=>import("./Content"));


const Loadable = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/content" component={Content}/>
            </Switch>
        </Router>
    )
}

export default Loadable