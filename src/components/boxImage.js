import React, { Component } from 'react';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Image from './image'
class BoxImage extends Component {
    state = { 
        items:[],
        url:"",
        urlbig:"",
        id:"",
        idbig:"",
        open:false,
        close:false
     }
    
componentWillMount(){
    this.setState({ id:this.props.id,items:this.props.items,url:this.props.url})
}

componentDidMount(){
    this.setState({urlbig:this.state.url,idbig:this.state.id})
}

handleClick = () =>{
    this.setState({ open:!this.state.open})
}

handleInc = () =>{
 
    if(this.state.items[this.state.idbig+1]!==undefined){
    this.setState({idbig:this.state.idbig+1}, () => {
   
        this.setState({urlbig:this.state.items[this.state.idbig].url})
      }); 
     
    }
}

handleDec = () =>{
    if(this.state.items[this.state.idbig-1]!==undefined){
        this.setState({idbig:this.state.idbig-1}, () => {
       
            this.setState({urlbig:this.state.items[this.state.idbig].url})
          }); 
         
        }
}
    render() { 
        return ( 
        <div className="boxPaint shadow p-3 mb-5 bg-white ">
            <img src={this.state.url} onClick={this.handleClick} alt="none"/>
                 <Dialog  aria-label="{}" className="dialog-box" isOpen={this.state.open} onDismiss={this.handleClick}>
                    <Image id={this.state.idbig} url={this.state.urlbig}/>
                    <button id="button-image" className="btn btn-default" onClick={this.handleClick}>Close Pic</button>
                    <div id="button-container">
                        <button id="button-image" className="btn btn-default" onClick={this.handleInc}>Next Pic</button> 
                        <button id="button-image" className="btn btn-default" onClick={this.handleDec}>Previous Pic</button> 
                    </div>
                   
                 </Dialog>
        </div>
         );
    }
}
 
export default BoxImage;