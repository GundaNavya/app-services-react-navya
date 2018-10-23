import React from 'react';

import { Link, NavLink} from 'react-router-dom';


const MainHeader = () => (
<div>
    <div id="main-navbar" className="navbar navbar-inverse  navbar-fixed-top" role="navigation">
    <div className="navbar-inner">
    <div className="navbar-header"> <a href="index.html" className="navbar-brand"> </a>
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse"><i className="navbar-icon fa fa-bars"></i></button>
    </div>
    <div id="main-navbar-collapse" className="collapse navbar-collapse main-navbar-collapse">
        <div>
        <div className="right">
            <ul className="nav navbar-nav pull-right right-navbar-nav">
            <li className="dropdown seperator"> <a href="#" className="dropdown-toggle user-menu" data-toggle="dropdown"><i className="menu-icon fa fa-cloud"></i> <span>KonysdfvsdfvsfUIX</span> <i className=" left-margin-5 fa fa-caret-down"></i></a>
                <ul className="dropdown-menu dropdown-account">
                <li><a href="#" className="current-user-profile"> <span><i className="menu-icon icon_cloud"></i>
                    <div className="cloudName">KonyUIX </div>
                    </span><span>Account ID: 123868797</span></a></li>
                <li><a href="#"> <span><i className="menu-icon icon_cloud"></i>
                    <div className="cloudName">AverylongcloudcomeshereinthisplaceAverylongcloudcomeshereinthisplace </div>
                    </span><span>Account ID: 1234567890</span></a></li>
                <li><a href="#"> <span><i className="menu-icon icon_cloud"></i>
                    <div className="cloudName">My Weather Services@CNNToday</div>
                    </span><span>Account ID: 123868797</span></a></li>
                </ul>
            </li>
            <li className="dropdown"> <a href="#" className="dropdown-toggle user-menu" data-toggle="dropdown"> <span>John Doe</span> <i className="fa fa-caret-down"></i></a>
                <ul className="dropdown-menu">
                <li><a href="my-profile.html"><i className="icon16 icon-profile di-block v-sub mr-10"></i>Profile</a></li>
                <li><a href="#"><i className="icon16 icon-account di-block v-sub mr-10"></i>Account</a></li>
                <li><a href="#"><i className="icon16 icon-settings di-block v-sub mr-10"></i>Settings</a></li>
                <li><a href="#"><i className="icon16 icon-logout di-block v-sub mr-10"></i>Log Out</a></li>
                <hr />
                <li><a href="#"><span className="last-logintxt">Last successful login:</span>6 Jan 2015 13:15</a></li>
                </ul>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
);

export default MainHeader;