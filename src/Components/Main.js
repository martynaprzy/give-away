import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Story from "./Story";
import About from "./About";
import Organizations from "./Organizations"
import Contact from "./Contact";
import Navigation from "./Navigation";
import SignUpPage from './SignUpPage'



class Main extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/story" component={Story} />
                    <Route path="/about" component={About}/>
                    <Route path="/organizations" component={Organizations}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path='/signup' component={SignUpPage}/>
                </Switch>
            </div>
        )
    }
}
export default Main;