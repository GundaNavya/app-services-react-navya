import React from 'react';
import TabHeader from '../components/TabHeader';
import {Link, NavLink} from 'react-router-dom';
import { Button, Popover, Overlay } from 'react-bootstrap';

var itemStatus = {
    content: {
        items: [
          {
            servicename: "Weather",
            servicetype: "SOAP",           
            version: [
              "V 1.0","V 2.0","V 3.0"
              // {"modal" : "V 1.0"},
              // {"modal" : "V 2.0"},
              // {"modal" : "V 3.0"}              
            ] ,
            operations: [
              "Select Operation","Get WeatherForeCast","Get CurrentWeather"
                // {"type" : "Select Operation"},
                // {"type" : "Get WeatherForeCast"},
                // {"type" : "Get CurrentWeather"}                                 
              ],
              "total_rate_limit" : "5/min",            
              "perip_rate_limit" : "2/min"            
          },
          {
            servicename: "News",
            servicetype: "REST" ,
            version: [
              "V 1.0","V 2.0","V 3.0"             
            ] ,
            operations: [
              "Select Operation","GetTopNews","GetNewsForCategory","GetLocalNews"
                // {"type" : "Select Operation"},
                // {"type" : "GetTopNews"},
                // {"type" : "GetNewsForCategory"},
                // {"type" : "GetLocalNews"}         
              ],
              "total_rate_limit" : "5/min",            
              "perip_rate_limit" : "2/min"             
          },
          {
            servicename: "Stocks",
            servicetype: "API Proxy" ,
            version: [
              "V 1.0","V 2.0","V 3.0"              
            ],
            operations: [
              "Select Operation","GetStockSummary","GetStockDeatils"
                // {"type" : "Select Operation"},
                // {"type" : "GetStockSummary"},
                // {"type" : "GetStockDeatils"}              
              ],              
              "total_rate_limit" : "NA",            
              "perip_rate_limit" : "NA"
          },
          
        ]
     }
  };
  // const popoverLeft = (
  //   <Popover id="popover-positioned-left">
  //     <strong>Holy guacamole!</strong> Check this info.
  //   </Popover>
  // );
  

var IntegrationTab = React.createClass({
        getInitialState: function(){
          return {            
            show: false,
            cur_version: "V 1.0"
          };
        },
        // constructor(props, context) {
        //   super(props, context);

        //   this.handleClick = e => {
        //     this.setState({ target: e.target, show: !this.state.show });
        //   };

        //   this.state = {
        //     show: false
        //   };
        // },
        handleClick:function(e){          
          this.setState({ target: e.target, show: !this.state.show });
        },
        dropClick:function(){          
          window.location = "int-req-input"
        },
        dropClick1 : function(e){
          console.log(e.target.text)
          this.setState({ cur_version: e.target.text});
        },
        render: function(){
            var keys = Object.keys(itemStatus.content);
            console.log(keys)
            console.log(itemStatus.content)
                     
            var allEmps = ['items'].map((t) => itemStatus.content[t].map((e) => (<tr><td>{e.servicename}</td><td>{e.servicetype}</td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{this.state.cur_version} <span className="caret"></span></button>
                  <ul className="dropdown-menu">                
                    {e.version.map((k) => <li><a onClick={this.dropClick1} href="javascript:void(0)">{k}</a></li>)}
                  </ul>
                </div>             
              </td>
              <td>
              <select className="input-select d-none inputSelect w-80" onChange={this.dropChange} name="version">{e.operations.map((j) => <option>{j}</option>)}</select>
             
              <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select Operation<span className="caret"></span></button>
              <ul className="dropdown-menu">
              {e.operations.map((j) => <li><a href="javascript:void(0)" onClick={this.dropClick}>{j}</a></li>)}
              </ul></div>    

              </td><td>{e.total_rate_limit}</td><td>{e.perip_rate_limit} <a href="javascript:void(0);" className="pull-right" onClick={this.handleClick}> 
               <Overlay
                  show={this.state.show}
                  target={this.state.target}
                  placement="bottom"
                  // container={this}
                  // containerPadding={20}
                >
              <Popover id="popover-contained">
                <strong>Holy guacamole!</strong> Check this info.
              </Popover>
            </Overlay><img className="icon16" src="/../../images/svg_icons/icon-edit.svg" /></a></td></tr>)) );
         
            return (<div className="ml-20">
                <TabHeader />
                
                <div className="col-sm-3 pl-0 pr-0 mt-20">
            <div className="form-group">                                
              <div className="input-wrapper input-select-wrapper">
                <select className="input-select inputSelect" name="authType">
                  <option value="">All Apps</option>
                  <option value="app-one">App One</option>
                  <option value="app-two">App Two</option>
                  <option value="app-three">App Three</option>
                </select>
              </div>
            </div>
          </div><table className="table-border" width="100%"><thead><tr><th className="w-10">Service Name</th><th className="w-10">Service Type</th><th className="w-10">Version</th><th className="w-15">Operations</th><th colSpan="3" className="w-30 text-center">Throttling</th></tr>
          <tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th><th >Total Rate Limit</th><th>Per IP Limit Rate</th></tr></thead><tbody>{allEmps}</tbody></table></div>)
          }
        }
    );

    export default IntegrationTab;