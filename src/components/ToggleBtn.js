import React, {Component} from 'react';


var Toggle = React.createClass({
    getInitialState: function(){
        return {
            hover: true            
        };
    },
    hoverOn: function(e){
        this.setState({ hover: true});
        
    },
    hoverOff: function(e){
        this.setState({ hover: false });        
    },   
    render: function(){
        return (
            <div>
            <input type="radio" value="color" name="input-box" id="id1" onClick={this.hoverOn} checked={this.state.hover}/>
            <label htmlFor="id1" >Show</label>
            <input type="radio" value="color1" name="input-box" id="id2" onClick={this.hoverOff} />
            <label htmlFor="id2" >Hide</label>
          

            <div className={ this.state.hover ? "d-none" : "d-block"} >SHow hide Content1</div>
            <div className={ this.state.hover ? "d-block" : "d-none"} >SHow hide Content2</div>
            </div>
        )
    }
    
})
    
export default Toggle;