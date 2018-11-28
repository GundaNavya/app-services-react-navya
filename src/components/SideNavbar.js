
import React from 'react';

import {Link, NavLink} from 'react-router-dom';


var SideHeader = React.createClass({
    getInitialState: function(){
        return {
            hover: false,
            hoverIcon: false
        };
    },
    hoverOn: function(e){
        this.setState({ hover: true });
    },
    hoverOff: function(e){
        this.setState({ hover: false });
    },
    hoverOnIcon: function(e){
        this.setState({ hoverIcon: true });
    },
    hoverOffIcon: function(e){
        this.setState({ hoverIcon: false });
    },
    render: function(){
        return (
            <div>
            <div id="main-menu-inner"><div className="nav-collapsed"> 
            
            
            <div id="side-navigation" className={ this.state.hover ? "side-navigation-max" : "side-navigation-min"} 
            onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff}><ul > 
            <li><NavLink to="/" className="kony-logo"><img className={ this.state.hover ? "hover-logo" : "main-logo"} 
            onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff} src="/../../images/svg_icons/logo.svg"/></NavLink></li>
            <li><NavLink to="/apps" className="icons apps selected" activeClassName="is-active" exact={true}> <img className={ this.state.hoverIcon ? "icon-edit" : "icon-edit-inactive"} onMouseEnter={this.hoverOnIcon} onMouseLeave={this.hoverOffIcon} /><span className="ml-10 module">Apps</span></NavLink></li>            
            <li><NavLink to="/gettext" className="icons dashboard" activeClassName="is-active" exact={true} ><img className="icon32" src="/../../images/svg_icons/icon-edit-inactive.svg"/><span className="ml-10 module">Monitoring </span></NavLink></li>
            <li><NavLink to="/jobs" className="icons api" activeClassName="is-active"  exact={true}> <img className="icon32" src="/../../images/svg_icons/icon-edit-inactive.svg"/><span className="ml-10 module">Jobs</span></NavLink></li>
            
            <li><NavLink to="/healthcheck" className="icons dev-portal" activeClassName="is-active" exact={true}> <img className="icon32" src="/../../images/svg_icons/icon-edit-inactive.svg"/><span className="ml-10 module">Health Check</span></NavLink></li>
            <li><NavLink to="/contact" className="icons clouds" activeClassName="is-active" exact={true}><img className="icon32" src="/../../images/svg_icons/icon-edit-inactive.svg"/><span className="ml-10 module">Logs </span> </NavLink></li>
            
            <li><NavLink to="/about" className="icons settings" activeClassName="is-active" exact={true}><img className="icon32" src="/../../images/svg_icons/icon-settings-inactive.svg"/><span className="ml-10 module">Settings</span> </NavLink></li>
            <li><NavLink to="/career" className="icons support" activeClassName="is-active" exact={true}> <img className="icon32" src="/../../images/svg_icons/icon-reports-inactive.svg"/><span className="ml-10 module">Reoprts</span></NavLink></li>
            <li className="product-name"><a className={ this.state.hover ? "hover-product" : "main-product"} 
            onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff} >Kony Fabric Console </a></li></ul> </div>
            </div>
            </div>
        </div>   
        )
    }

});

export default SideHeader;
