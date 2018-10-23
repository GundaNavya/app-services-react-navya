
import React from 'react';

// const EditExpansePage = () => (
//     <div>This is from Apps dashboard page</div>
// );


var EditExpansePage = React.createClass({
    getInitialState: function(){
        return {
            hover: false
        };
    },
    hoverOn: function(e){
        this.setState({ hover: true });
        alert(e.target.text)
    },
    hoverOff: function(e){
        this.setState({ hover: false });
    },
    render: function(){
        return(
            <div>
            <a 
                className={ this.state.hover ? "minwidth" : "maxwidth"} 
                onMouseEnter={this.hoverOn} 
                onMouseLeave={this.hoverOff}
            >Hover me !!</a> 
            </div>
        )
    }
})


export default EditExpansePage;