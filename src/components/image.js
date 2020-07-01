import React, { Component } from 'react';
class Image extends Component {
    state = { 
        url:"",
        id:""
     }

componentWillUpdate(){
    
}
    render() { 
        return ( 
            <p><img src={this.props.url} alt="none"></img></p>
         );
    }
}
 
export default Image;