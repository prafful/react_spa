import React from "react";
import ReactDOM from "react-dom";

class Friend extends React.Component{
    render(){
        return(
           <div>
               {this.props.name} is from {this.props.location}
           </div> 
        );
    }

}

export default Friend;