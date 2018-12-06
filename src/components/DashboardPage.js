
import React from 'react';

var itemStatus = {
    content: {
        items: [
          {
            item: "Cloud Environment Identification	",
            status: "Passsed",
            // options : {
            //   modal : "Enfield",modal1 : "Yamaha", modal2 : "Bajaj"
            // },
            options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]            
          },
          {
            item: "Access to Reporting Queue",
            status: "Passsed" ,
            options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]           
          },
          {
            item: "Security Credentials	",
            status: "Failed" ,
            options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]             
          },
          {
            item: "Static Resources Location",
            status: "Passsed",
            options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]                 
          },
          {
            item: "Access to Deployment Storage	",
            status: "Passsed",
            options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]            
          },
          {
            item: "Access to Device DB",
            status: "Passsed" ,
           options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]               
          },
          {
            item: "Access to Cache",
            status: "Failed" ,
            options: [
              {"modal" : "Enfield"},
              {"modal" : "Yamaha"},
              {"modal" : "Bajaj"}              
            ]            
          }
        ]
     }
  };
  

  var ExpanseDashboardPage = React.createClass({
    render: function() {
      //To retrieve keys from data.content
      var keys = Object.keys(itemStatus.content);
      console.log(keys)
      console.log(itemStatus.content)
   
      //iterate through the keys to get the underlying values
      var allEmps = ['items'].map((t) => itemStatus.content[t].map((e) => (<tr><td>{e.item}</td><td className={ e.status === "Failed" ? "failed" : "success"}>{e.status}</td></tr>)) );
   
      return (<div className="ml-10">
      <div className="col-sm-12 clear">
          <div className="di-block pull-right mb-25 pr-0">
            <form action="" className="search-form">
            <div className="form-group has-feedback">                    
                <label className="sr-only">Search</label>
                <input type="text" className="form-control search-box" name="search" placeholder="search" />                    
                <span className="form-control-feedback"><a href="#"><i className="icon12 d-block icon-search"></i></a></span> </div>
            </form>
          </div>
      </div>
      <div className="col-sm-12 mt-10 clear"><table className="table-border mt-20" width="100%"><thead><tr><th>Item</th><th>Status</th></tr></thead><tbody>{allEmps}</tbody></table></div> </div> )
    }
  });

export default ExpanseDashboardPage;