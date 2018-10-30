
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddExpansePage from '../components/AddExpanse';
import ExpanseDashboardPage from '../components/DashboardPage';
import EditExpansePage from '../components/EditExpanse';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/PageNotFound';
import MainHeader from '../components/MainHeader';
import Header from '../components/HeaderBar';
import SideHeader from '../components/SideNavbar'; 
import MyComponent from '../components/GetText';
import UploadFile from '../components/FileUpload';
import IdentityTab from '../components/IdentityApps';
import IntegrationTab from '../components/IntegrationApps';
import OrchTab from '../components/OrchApps';




const AppRouter = () => (
    <BrowserRouter>
    <div>
    <MainHeader />    
    <SideHeader />
    
    <Switch>
        <Route path="/" component={ExpanseDashboardPage} exact={true}/>
        <Route path="/api" component={AddExpansePage}/>
        <Route path="/apps" component={EditExpansePage} exact={true}/>
        <Route path="/apps/identity" component={IdentityTab}/>
        <Route path="/apps/integration" component={IntegrationTab}/>
        <Route path="/apps/orchestration" component={OrchTab}/>
        <Route path="/devportal" component={HelpPage}/>
        <Route path="/gettext" component={MyComponent}/>
        <Route path="/contact" component={UploadFile}/>
        <Route component={NotFoundPage}/>
     </Switch>
     </div>
    </BrowserRouter> 
);

export default AppRouter;