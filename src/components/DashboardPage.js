
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
      var allEmps = ['items'].map((t) => itemStatus.content[t].map((e) => (<tbody><tr><td>{e.item}</td><td className={ e.status === "Failed" ? "failed" : "success"}>{e.status}</td><td><select>{e.options.map((k) => <option>{k.modal}</option>)}</select></td></tr></tbody>)) );
   
      return (<table className="table-border" width="100%"><thead><tr><th>Item</th><th>Status</th><th></th></tr></thead>{allEmps}</table>)
    }
  });

export default ExpanseDashboardPage;