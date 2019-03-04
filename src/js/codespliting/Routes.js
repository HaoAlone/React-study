import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React from "react";

import Home from "./Home"
import About from "./About"
import Content from "./Content"
import asyncComponent from "./asyncRoutes";

const HomeA  = asyncComponent(()=>import("./Home"));
const AboutA = asyncComponent(()=>import("./About"));
const ContentA  = asyncComponent(()=>import("./Content"));

// export default ({ childProps }) =>
//     <Router>
//         <Switch>
//             <HomeA
//                 path="/"
//                 exact
//                 component={Home}
//                 props={childProps}
//             />
//             <AboutA
//                 path="/login"
//                 component={About}
//                 props={childProps}
//             />
//             <ContentA
//                 path="/Content"
//                 component={About}
//                 props={childProps}
//             />
//         </Switch>
//     </Router>
//
// ;

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/content" component={Content}/>
            </Switch>
        </Router>
    )
};


export default Routes