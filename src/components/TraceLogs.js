import React from 'react';
import LogTabs from '../components/LogTabs';

var TraceTab = React.createClass({
    
        render: function(){
            return(
                <div>
                <LogTabs />
                <div>This is from App Trace Logs</div>
                </div>
            )
        }
    });

    export default TraceTab;