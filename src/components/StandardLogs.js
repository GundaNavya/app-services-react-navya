import React from 'react';
import LogTabs from '../components/LogTabs';

var SatandardTab = React.createClass({
    
        render: function(){
            return(
                <div>
                <LogTabs />
                <div>This is from App Satandard Logs</div>
                </div>
            )
        }
    });

    export default SatandardTab;