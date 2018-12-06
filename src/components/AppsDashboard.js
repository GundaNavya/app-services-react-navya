
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class AppsDashboard extends Component{
   
    render(props){
        return(
            <div>               
            <h1>From Apps Dashboard page</h1>    
            <ul>
            <li><NavLink to="/apps/integration">Integration</NavLink></li>
            <li><NavLink to="/apps/orchestration">Orchestration</NavLink></li>
            <li><NavLink to="/apps/Objects">Objects</NavLink></li>
            </ul>               
            </div>
        )
    }
};

export default AppsDashboard;