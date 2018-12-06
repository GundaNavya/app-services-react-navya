
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
import ObjectsTab from '../components/ObjectApps';
import IntegrationTab from '../components/IntegrationApps';
import OrchTab from '../components/OrchApps';
import LogTabs from '../components/LogTabs';
import StandardTab from '../components/StandardLogs';
import TraceTab from '../components/TraceLogs';
import JobDetails from '../components/JobDetails';
import Products from '../components/SearchBox';
import IntReqInput from '../components/IntReqInput';
import IntResOp from '../components/ResponseOp';
import AppsDashboard from '../components/AppsDashboard';
import Toggle from '../components/ToggleBtn';






const AppRouter = () => (
    <BrowserRouter>
    <div>
    <MainHeader />      
    <SideHeader />
    
    
    <Switch>
        <Route path="/healthcheck" component={ExpanseDashboardPage} exact={true}/>
        <Route path="/jobs" component={JobDetails}/>
        <Route path="/" component={AppsDashboard} exact={true}/>
        <Route path="/apps/objects" component={ObjectsTab}/>
        <Route path="/apps/integration" component={IntegrationTab}/>
        <Route path="/apps/orchestration" component={OrchTab}/>
        <Route path="/devportal" component={HelpPage}/>
        <Route path="/gettext" component={MyComponent}/>
        <Route path="/contact" component={UploadFile} exact={true}/>
        <Route path="/contact/standard" component={StandardTab}/>
        <Route path="/contact/trace" component={TraceTab}/>
        <Route path="/search" component={Products}/>
        <Route path="/toggle" component={Toggle}/>
        <Route path="/apps/int-req-input" component={IntReqInput} exact={true}/>
        <Route path="/apps/responce-op" component={IntResOp} exact={true}/>

        <Route component={NotFoundPage}/>
     </Switch>
     </div>
    </BrowserRouter> 
);

export default AppRouter;