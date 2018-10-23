
import React from 'react';

// const AddExpansePage = () => (
//     <div>This is from API Management page</div>
// );

var empdata = {
    content: {
        employee: [
          {
            name: "Joe",
            Age: 30,
            id : 1007
          },
          {
            name: "Bill",
            Age: 35,
            id : 1008
          },
          {
            name: "pawan",
            Age: 27,
            id : 2235
          },
          {
            name: "kumar",
            Age: 23,
            id : 2135
          },
          {
            name: "asdcac",
            Age: 12,
            id : 3434
          }
        ]
     }
  };

  var AddExpansePage = React.createClass({
    render: function() {
      //To retrieve keys from data.content
      var keys = Object.keys(empdata.content);
      console.log(keys)
   
      //iterate through the keys to get the underlying values
      var allEmps = ['employee'].map((t) => empdata.content[t].map((e) => (<div><li>{e.id}-{e.name}-{e.Age}</li></div>)) );
   
      return (<div>{allEmps}</div>)
    }
  });
  

export default AddExpansePage;