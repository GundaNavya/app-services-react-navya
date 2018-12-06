
import React from 'react';

import {Link, NavLink} from 'react-router-dom';


var SideHeader = React.createClass({
    getInitialState: function(){
        return {
            hover: false            
        };
    },
    hoverOn: function(e){
        this.setState({ hover: true });
        
    },
    hoverOff: function(e){
        this.setState({ hover: false });
        console.log(this.state.hover);
    },   
    render: function(){
        return (
            <div>
            <div id="main-menu-inner"><div className="nav-collapsed" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}> 
            
            
            <div id="side-navigation" className={ this.state.hover ? "side-navigation-max" : "side-navigation-min"} >
            <ul> 
            <li ><NavLink to="/asdc" className="kony-logo"><img className={ this.state.hover ? "hover-logo" : "main-logo"} src="/../../images/svg_icons/logo.svg"/></NavLink></li>
            <li><NavLink to="/" className="icons apps selected" activeClassName="is-active" exact={true}> <i className="icon32 v-middle icon-apps" ></i><span className="module">Apps</span></NavLink></li>            
            
            <li><NavLink to="/gettext" className="icons dashboard" activeClassName="is-active" exact={true} ><i className="icon32 v-middle icon-monitoring" ></i><span className="module">Monitoring </span></NavLink></li>
            <li><NavLink to="/jobs" className="icons api" activeClassName="is-active"  exact={true}> <i className="icon32 v-middle icon-jobs" ></i><span className="module">Jobs</span></NavLink></li>            
            <li><NavLink to="/healthcheck" className="icons dev-portal" activeClassName="is-active" exact={true}><i className="icon32 v-middle icon-healthcheck" ></i><span className="module">Health Check</span></NavLink></li>
            <li><NavLink to="/contact" className="icons clouds" activeClassName="is-active" exact={true}><i className="icon32 v-middle icon-logs" ></i><span className="module">Logs </span> </NavLink></li>            
            
            <li><NavLink to="/about" className="icons settings" activeClassName="is-active" exact={true}><i className="icon32 v-middle icon-settings" ></i><span className="module">Settings</span> </NavLink></li>
            <li><NavLink to="/career" className="icons support" activeClassName="is-active" exact={true}> <i className="icon32 v-middle icon-reports" ></i><span className=" module">Reoprts</span></NavLink></li>
            <li className="product-name"><a className={ this.state.hover ? "hover-product" : "main-product"}>Kony Fabric Console </a></li>
            </ul> </div>
            </div>
            </div>
        </div>   
        )
    }

});

export default SideHeader;
