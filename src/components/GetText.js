
import React from 'react';


var MyComponent = React.createClass({
    handleClick: function() {
      if (this.refs.myInput !== null) {
          var input = this.refs.myInput;
              var inputValue = input.value;
        // alert("Input is " + inputValue);
        document.getElementById('textValue').innerHTML = inputValue;
      }
    },
    btnClick: function(e){
        // var attr_val =  e.target.attributes.getNamedItem("name").value ;
        var attr_val = e.currentTarget.attributes['name'].value;
        // $(event.target.attributes['data-tag']).val();
        document.getElementById('btnValue').innerHTML = attr_val;
    },
    render: function() {
      return (
        <div>
          <input type="text" ref="myInput" />
          <input
            type="button"
            value="Alert the text input"
            onClick={this.handleClick}
          />
          <button className="btn-click" name="clickme" onClick={this.btnClick}>Click me </button>
          <button className="btn-click" name="clickme1" onClick={this.btnClick}>Click me 1</button>
          <button className="btn-click" name="clickme2" onClick={this.btnClick}>Click me 2</button>
          <div id="textValue"></div>
          <div id="btnValue"></div>
        </div>
      );
    }
  });
  
  export default MyComponent;