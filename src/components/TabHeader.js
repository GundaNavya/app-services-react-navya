import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var TabHeader = React.createClass({

    render: function(){
        return(
            <div>
            <div className="submenu-navigation-menu">
            <div className="row">
                <div className="col-sm-9 tabwidth">
                    <div className="stat-counters  no-border-b no-padding text-center">
                    
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/apps/integration"><i className="icon24 di-block icon-integration-inactive"></i> </NavLink><NavLink to="/apps/integration" activeClassName="tab-active" className="pull-left appicon-cell-icon-margin">Integration</NavLink> </div>
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/apps/orchestration"><i className="icon24 di-block icon-orchestration-inactive"></i> </NavLink><NavLink to="/apps/orchestration" activeClassName="tab-active" className="pull-left appicon-cell-icon-margin">Orchestration</NavLink> </div>                     
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/apps/objects"><i className="icon24 di-block icon-integration-inactive"></i> </NavLink><NavLink to="/apps/objects" activeClassName="tab-active" className="pull-left appicon-cell-icon-margin">Objects</NavLink> </div>
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

export default TabHeader;

