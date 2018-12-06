import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var ResIpOP = React.createClass({

    render: function(){
        return(
            <div>
            <div className="submenu-navigation-menu">
            <div className="row">
                <div className="col-sm-9 tabwidth">
                    <div className="stat-counters  no-border-b no-padding text-center">
                    
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/apps/int-req-input"><i className="icon24 di-block icon-integration-inactive"></i> </NavLink><NavLink to="/apps/int-req-input" activeClassName="is-active" className="pull-left appicon-cell-icon-margin">Request Input</NavLink> </div>
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/apps/responce-op"><i className="icon24 di-block icon-orchestration-inactive"></i> </NavLink><NavLink to="/apps/responce-op" activeClassName="is-active" className="pull-left appicon-cell-icon-margin">Response Output</NavLink> </div>                                             
                    </div>

                </div>

                <div>
                </div>
            </div>
        </div>
            </div>
        )
    }
});

export default ResIpOP;

