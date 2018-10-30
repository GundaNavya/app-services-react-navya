
import React from 'react';

var itemStatus = {
    content: {
        items: [
          {
            item: "Cloud Environment Identification	",
            status: "Passsed"            
          },
          {
            item: "Access to Reporting Queue",
            status: "Passsed"            
          },
          {
            item: "Security Credentials	",
            status: "Failed"             
          },
          {
            item: "Static Resources Location",
            status: "Passsed"               
          },
          {
            item: "Access to Deployment Storage	",
            status: "Passsed"            
          },
          {
            item: "Access to Device DB",
            status: "Passsed"              
          },
          {
            item: "Access to Cache",
            status: "Failed"              
          }
        ]
     }
  };

  var ExpanseDashboardPage = React.createClass({
    render: function() {
      //To retrieve keys from data.content
      var keys = Object.keys(itemStatus.content);
      console.log(keys)
   
      //iterate through the keys to get the underlying values
      var allEmps = ['items'].map((t) => itemStatus.content[t].map((e) => (<tbody><tr><td>{e.item}</td><td className={ e.status === "Failed" ? "failed" : "success"}>{e.status}</td></tr></tbody>)) );
   
      return (<table className="table-border" width="100%"><thead><th>Item</th><th>Status</th></thead>{allEmps}</table>)
    }
  });

export default ExpanseDashboardPage;