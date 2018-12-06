
import React, {Component} from 'react';
// import LogTabs from '../components/LogTabs';
import ResIpOP from '../components/ResponseIPOP';
import NavLink from 'react-router-dom/NavLink';
import { BrowserRouter, Route, Switch, HashRouter, Link } from 'react-router-dom';
import { Tab,Tabs } from 'react-bootstrap';




class ControlledTabs extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
      this.radio1 = this.radio1.bind(this);
      this.radio2 = this.radio2.bind(this);
      this.state = {
        key: 1,
        show:false
     
      };
    }
  
    handleSelect(key) {
      
      this.setState({ key });
    }
    // componentDidUpdate () {
    //     alert(document.querySelector('input[name=body-input-fileds]:checked').value);
    //   };
radio1(){
   console.log("clicking on first radio button")
        this.setState.show = true;
        console.log(this.setState.show)
}
radio2(){
    console.log("clicking on second radio button")
        this.setState.show = false;
        console.log(this.setState.show)
   
}

    render() {
      return (
          <div>
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Body">
           


        <div className="col-sm-12 pr-0 pl-0 mt-20">
          <input type="radio" className="css-checkbox" name="body-input-fileds"  id="input-parameter" value="radio-1" onClick={this.radio1}/>
          <label  htmlFor="input-parameter" className="ml-10">Input Parameter</label>
          <input type="radio" className="css-checkbox ml-10"  name="body-input-fileds"  id="raw-json" value='radio-2' onClick={this.radio2} />
          <label  htmlFor="raw-json" className="ml-10">Raw JSON</label>
      
          </div>
        
       



            <div className= "col-sm-12 pr-0 pl-0 mt-10 " id="input-parameter">
                <div className="col-sm-4 pl-0">
                    <div className="form-group">
                        <label>ZipCode</label>
                        <input type="text" className="form-control"></input>
                    </div>
                </div>
                <div className="col-sm-4 pl-0">
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control"></input>
                    </div>
                </div>
                <div className="col-sm-4 pr-0 pl-0">
                        <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control"></input>
                    </div>
                </div>
               
            
            </div>
            <div className="PreCode">
            <pre>
            <ol>
            <li><span>[</span></li>
            <li><span>"Field Values hihihi"</span><span>":"</span><span>"zip code"</span></li>
            <li><span>"Vlaue"</span><span>":"</span><span>""</span></li>
            <li><span>"Field Name"</span><span>":"</span><span>"city"</span></li>
            <li><span>"Vlaue"</span><span>":"</span><span>""</span></li>
            <li><span>"Field Name"</span><span>":"</span><span>"state"</span></li>
            <li><span>"Vlaue"</span><span>":"</span><span>""</span></li>
            </ol>
            </pre>
            </div>
          </Tab>
          <Tab eventKey={2} title="Header">
          <div className= "col-sm-12 pr-0 pl-0 mt-20">
          <div className="col-sm-4 pl-0">
              <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control"></input>
              </div>
          </div>
        
          <div className="col-sm-4 pl-0">
                  <div className="form-group">
                  <label>Value</label>
                  <input type="text" className="form-control"></input>
              </div>
          </div>
         
      
      </div>
          </Tab>
         
        </Tabs>
        </div>
      );
    }
  }
  



class IntReqInput extends Component{
   
    render(props){
        return(
            <div>   
            <ResIpOP />
           
            <div className="col-sm-12 mt-20">
               <div className="form-group"><label>Server URL</label><div><input placeholder="enter server url" className="form-control input-text service_name w-10 pull-left border-rt-none b-right-0" value="POST" disabled></input><input placeholder="enter server url" className="form-control input-text service_name w-90 border-lb-none" value="http://news.google.com" disabled></input></div></div>
            </div>
            <div className="col-sm-12">
                <div className="form-group"><label>Target Backend URL</label><div><input placeholder="enter server url" className="form-control input-text service_name w-50 pull-left border-rt-none b-right-0" value="http://news.google.com" disabled></input><input placeholder="enter server url" className="form-control input-text service_name w-50 border-lb-none" value="http://news.google.com"></input></div></div>
            </div>
            <div className="col-sm-12">
            <ControlledTabs />

            </div>
                              
            </div>
        )
    }
};



export default IntReqInput;