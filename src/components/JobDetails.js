import React, {Component} from 'react';


var JobDetails = React.createClass({   

    render: function(props){
        return(
            <div><h4>From jobs page</h4>   
            <div className="col-sm-12 pl-0 pr-0 clear">  
            <div className="pull-left">
                <button className="button-m button-primary">ADD NEW</button>
            </div>                             

                <div className="di-block pull-right mb-25 pr-0">
                    <form action="" className="search-form">
                    <div className="form-group has-feedback">                    
                        <label className="sr-only">Search</label>
                        <input type="text" className="form-control search-box" name="search" placeholder="search" />                    
                        <span className="form-control-feedback"><a href="#"><i className="icon12 d-block icon-search"></i></a></span> </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-12 clear pl-0 pr-0">
             <table className="table-border mt-15" width="100%">
              <thead>
              <tr>
              <th> Name</th><th>Description</th><th>Modified By</th><th>Modified Date</th><th>Sucess Rate</th>
              <th>Last Run Status</th><th>Job Schedule</th>
              </tr>
              </thead>  
              <tbody>
             
              </tbody>
              
              </table></div>
            </div>
            
        )
    }
});

export default JobDetails;