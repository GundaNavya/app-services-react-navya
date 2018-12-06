
import React, {Component} from 'react';
// import LogTabs from '../components/LogTabs';
import ResIpOP from '../components/ResponseIPOP';
import TabHeader from '../components/TabHeader';


class IntResOp extends Component{
   
    render(props){
        return(
            <div className="ml-10">  
           
            <TabHeader />
            
            <div className="mt-10"><ResIpOP /> </div>   
            <div className="col-sm-12 text-right mt-20"><a href="javascript:void(0);">View Logs</a></div>         
            <div className="panel-group mt-40 col-sm-12 clear" id="accordion" role="tablist" aria-multiselectable="true">
            
                    <div className="panel panel-default">
                        <div className="panel-heading containerdragIcon pt-25 pr-20" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="env-accordion collapsed">                                    
                                    <div className="ml-10">Request to Backend</div>
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                  <table className="table-border col-sm-12">
                                    <thead>
                                        <tr><th>Parameter Name</th> <th>Parameter Scope</th> <th> Parameter Value</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Zip Code</td> <td>Session</td> <td>60023</td></tr>
                                        <tr><td>City</td> <td>Request</td> <td>Chicago</td></tr>
                                        <tr><td>State</td> <td>Request</td> <td>IL</td></tr>
                                    </tbody>
                                  </table>
                            </div>
                        </div>
                    </div>
            
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" className="env-accordion collapsed">                                                                       
                                    <div className="ml-10"> Response from Backend</div>
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body">
                           
                          <div className="col-sm-12 pr-0">
                                <div>
                                    <h4>Header</h4>
                                    <table className="table-border col-sm-12 mt-10">
                                    <thead>
                                        <tr><th>Parameter Name</th> <th>Parameter Scope</th> <th> Parameter Value</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Zip Code</td> <td>Session</td> <td>60023</td></tr>
                                        <tr><td>City</td> <td>Request</td> <td>Chicago</td></tr>
                                        <tr><td>State</td> <td>Request</td> <td>IL</td></tr>
                                    </tbody>
                                  </table>
                                </div>
                           
                          </div>
                          <div className="col-sm-12 pr-0">
                                <h4 className="mt-20">Body</h4>
                                <div className="mt-10"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</div>
                          </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" className="env-accordion collapsed">                                                                    
                                <div className="ml-10"> Result to Client</div>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                        </div>
                    </div>
                </div>        
                </div>
        </div>                            
        )
    }
};

export default IntResOp;