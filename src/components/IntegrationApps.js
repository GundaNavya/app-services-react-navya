import React from 'react';
import TabHeader from '../components/TabHeader';

var IntegrationTab = React.createClass({
    
        render: function(){
            return(
                <div>
                <TabHeader />
                <div className="col-sm-12">
                <h4>This is from App Integration</h4>
                
                <div className="col-sm-3 pr-0">
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
              </div>
              <div className="col-sm-12">
              <table className="table-border" width="100%">
              <thead>
              <tr>
              <th>Service Name</th><th>Service Type</th><th>Version</th><th>Operations</th><th>Throttling</th>
              </tr>
              </thead>  
              <tbody>
              <tr>
                        <td>Weather</td>
                        <td>SOAP</td>
                        <td>                               
                        <div className="input-wrapper input-select-wrapper col-sm-7 pl-0">
                            <select className="input-select inputSelect" name="version">                  
                            <option value="v1.0">V 1.0</option>
                            <option value="v2.0">V 2.0</option>
                            <option value="v3.0">V 3.0</option>
                            </select>
                        
                            </div>
                            </td>
                        <td>
                        <div className="input-wrapper input-select-wrapper col-sm-7 pl-0">
                        <select className="input-select inputSelect" name="version">                  
                            <option value="">Select Operation</option>
                            <option value="forecast">Get WeatherForeCast</option>
                            <option value="currestweather">Get CurrentWeather</option>
                        </select>
                        
                    </div>
                        </td>
                        <td></td>
              </tr>
              <tr>
                        <td>News</td>
                        <td>REST</td>
                        <td>                               
                        <div className="input-wrapper input-select-wrapper col-sm-7 pl-0">
                            <select className="input-select inputSelect" name="version">                  
                            <option value="v1.0">V 1.0</option>
                            <option value="v2.0">V 2.0</option>
                            <option value="v3.0">V 3.0</option>
                            </select>
                        
                            </div>
                            </td>
                        <td>
                        <div className="input-wrapper input-select-wrapper col-sm-7 pl-0">
                        <select className="input-select inputSelect" name="version">                  
                            <option value="">Select Operation</option>
                            <option value="forecast">Get WeatherForeCast</option>
                            <option value="currestweather">Get CurrentWeather</option>
                        </select>
                        
                    </div>
                        </td>
                        <td></td>
              </tr>
              <tr>
                        <td>Stocks</td>
                        <td>API Proxy</td>
                        <td>                               
                        <div className="input-wrapper input-select-wrapper col-sm-7 pl-0">
                            <select className="input-select inputSelect" name="version">                  
                            <option value="v1.0">V 1.0</option>
                            <option value="v2.0">V 2.0</option>
                            <option value="v3.0">V 3.0</option>
                            </select>
                        
                            </div>
                            </td>
                        <td>
                        <div className="input-wrapper input-select-wrapper col-sm-7 pl-0">
                        <select className="input-select inputSelect" name="version">                  
                            <option value="">Select Operation</option>
                            <option value="forecast">Get WeatherForeCast</option>
                            <option value="currestweather">Get CurrentWeather</option>
                        </select>
                        
                    </div>
                        </td>
                        <td></td>
              </tr>
              
              </tbody>
              
              </table>
              </div>
                
                </div>
                </div>
            )
        }
    });

    export default IntegrationTab;