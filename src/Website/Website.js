import React from "react";
import ReactDOM from "react-dom";

import { Route, NavLink, HashRouter } from "react-router-dom";

import Friends from "./Friends";
import Profile from "./Profile";
import Home from "./Home";
import Youtube from './Youtube/YouTube'


import './index.css';
import YouTube from "./Youtube/YouTube";

class Website extends React.Component{
    render(){
        return(
            <HashRouter>
                <div >
                    <h1> Simple SPA in React</h1>
                    <ul className="header"> 
                        <li><NavLink exact to="/"> Home</NavLink> </li>
                        <li><NavLink to="/friends"> Friends</NavLink> </li>
                        <li><NavLink to="/profile"> Profile</NavLink> </li>
                        <li><NavLink to="/youtube"> Youtube</NavLink> </li>
                    </ul>
                    
                    <div className="content">
                        <Route exact path="/" component={Home} />
                       <Route path="/friends" component={Friends} />
                       <Route path="/profile" component={Profile} />
                       <Route path="/youtube" component={YouTube} />
                    </div>


                </div> 
            </HashRouter>   

        );
    }

}

export default Website;