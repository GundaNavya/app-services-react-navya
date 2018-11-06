import React from 'react';
import {Link, NavLink} from 'react-router-dom';

var LogTabs = React.createClass({

    render: function(){
        return(
            <div>
            <div className="submenu-navigation-menu">
            <div className="row">
                <div className="col-sm-9 tabwidth">
                    <div className="stat-counters  no-border-b no-padding text-center">
                    
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/contact/standard"><i className="icon24 di-block icon-integration-inactive"></i> </NavLink><NavLink to="/contact/standard" activeClassName="is-active" className="pull-left appicon-cell-icon-margin">Standard Logs</NavLink> </div>
                        <div className="appicon-cell"> <NavLink className="text-bg pull-left" to="/contact/trace"><i className="icon24 di-block icon-orchestration-inactive"></i> </NavLink><NavLink to="/contact/trace" activeClassName="is-active" className="pull-left appicon-cell-icon-margin">Trace Logs</NavLink> </div>                                             
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

export default LogTabs;

