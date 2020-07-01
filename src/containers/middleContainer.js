import React, { Component } from 'react';
import RowImages from "../components/rowImages";
import FooterContainer from "../containers/footerContainer";

class MiddleContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="middle-container">
                <div className="row-container">
                    <div className="row.">
                        <RowImages />
                        <FooterContainer />
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default MiddleContainer;