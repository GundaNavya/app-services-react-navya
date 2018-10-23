
import React from 'react';

import {Link, NavLink} from 'react-router-dom';


var SideHeader = React.createClass({
    getInitialState: function(){
        return {
            hover: false
        };
    },
    // hoverOn: function(e){
    //     this.setState({ hover: true });
    // },
    // hoverOff: function(e){
    //     this.setState({ hover: false });
    // },
    render: function(){
        return (
            <div>
            <div id="main-menu-inner"><div className="nav-collapsed"> 
            
            
            <div id="side-navigation"
            //  className={ this.state.hover ? "side-navigation-max" : "side-navigation-min"} 
            // onMouseEnter={this.hoverOn} 
            // onMouseLeave={this.hoverOff}
            ><ul > 
            <li><NavLink to="/abc" className="kony-logo"><i className="logo"></i></NavLink></li>
            <li><NavLink to="/" className="icons dashboard" activeClassName="is-active" exact={true} ><i className="icon32 di-block v-middle icon-dashboard-inactive  mr-15"></i><span>Dashboard </span></NavLink></li>
            <li><NavLink to="/api" className="icons api" activeClassName="is-active"  exact={true}> <i className="icon32 di-block v-middle icon-API-inactive mr-15"></i><span>API Management</span></NavLink></li>
            <li><NavLink to="/apps" className="icons apps selected" activeClassName="is-active" exact={true}> <i className="icon32 di-block v-middle mr-15 icon-apps"></i><span>Apps</span></NavLink></li>
            <li><NavLink to="/gettext" className="icons dev-portal" activeClassName="is-active" exact={true}> <i className="icon32 di-block v-middle icon-developer-portal-inactive mr-15"></i><span>Developer Portal</span></NavLink></li>
            <li><NavLink to="/contact" className="icons clouds" activeClassName="is-active" exact={true}><i className="icon32 di-block v-middle icon-environments-inactive  mr-15"></i><span>Environments </span> </NavLink></li>
            <li><NavLink to="/site" className="icons reports" activeClassName="is-active" exact={true}> <i className="icon32 di-block v-middle icon-reports-inactive mr-15"></i><span>Reports</span> </NavLink></li>
            <li><NavLink to="/about" className="icons settings" activeClassName="is-active" exact={true}> <i className="icon32 di-block v-middle icon-settings-inactive mr-15"></i><span>Settings</span> </NavLink></li>
            <li><NavLink to="/career" className="icons support" activeClassName="is-active" exact={true}> <i className="icon32 di-block v-middle icon-support-inactive mr-15"></i><span>Support</span></NavLink></li>
            <li className="product-name" ><NavLink to="/career" activeClassName="is-active" exact={true} className="mb_title">Kony Fabric Console </NavLink></li></ul> </div>
            </div>
            </div>
        </div>   
        )
    }

});

export default SideHeader;
