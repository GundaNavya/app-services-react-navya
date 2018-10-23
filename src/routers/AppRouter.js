
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddExpansePage from '../components/AddExpanse';
import ExpanseDashboardPage from '../components/DashboardPage';
import EditExpansePage from '../components/EditExpanse';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/PageNotFound';
import MainHeader from '../components/MainHeader';
import Header from '../components/HeaderBar';
import SideHeader from '../components/SideNavBar'; 
import MyComponent from '../components/GetText';





const AppRouter = () => (
    <BrowserRouter>
    <div>
    <MainHeader />    
    <SideHeader />
    <Switch>
        <Route path="/" component={ExpanseDashboardPage} exact={true}/>
        <Route path="/api" component={AddExpansePage}/>
        <Route path="/apps" component={EditExpansePage}/>
        <Route path="/devportal" component={HelpPage}/>
        <Route path="/gettext" component={MyComponent}/>
        <Route component={NotFoundPage}/>
     </Switch>
     </div>
    </BrowserRouter> 
);

export default AppRouter;