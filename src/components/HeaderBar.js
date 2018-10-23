
import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Header = () => (
    <div>       
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li><NavLink to="/konyuix" activeClassName="is-active" exact={true}>Kony UIX</NavLink></li>
            <li><NavLink to="/profile" activeClassName="is-active">Profile</NavLink></li>            
          </ul>
        </div>
      </nav>

    </div>
);

export default Header;