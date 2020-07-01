import React, { Component } from 'react';
import BoxImage from './boxImage';
import Post from './data.json';

class RowImages extends Component {
    state = { 
        items:[]
     }

componentWillMount(){
        Post.map((box)=>{
            return(this.state.items.push(box))
        })
};

        render() { 
            return (
                <div className="row">
                    {this.state.items.map((box,index)=>{
                        return(<React.Fragment key={index}><BoxImage key={index} id={box.id} url={box.url} items={this.state.items}/></React.Fragment>)
                    }
                )
                }
               
                 </div> 
             );
        }
        
}
 

export default RowImages;