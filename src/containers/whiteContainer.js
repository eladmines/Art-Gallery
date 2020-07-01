import React, { Component } from 'react';
class WhiteContainer extends Component {
    state = {  }
    render() { 
        return ( 
           
        <div id="head-container" className="shadow w-75 p-3 mb-5 bg-white ">
            <div id="details-container">
            <div id="img-container">
              <img src="https://image.shutterstock.com/image-vector/cute-thinking-woman-looking-away-600w-439245706.jpg" alt="none"></img>
            </div>
            <div id="title-container">
              <div id="painter-container"><span>Painter</span></div>
              <div id="name-container"><span>Israel-Israeli</span></div>
            </div>
            <div id="title-contact">
                <div id="tel-container">
                    <div id="tel-img-container">
                      <img src="https://img.icons8.com/plasticine/100/000000/phone-not-being-used.png" alt="none"/>
                    </div>
                    <div id="tel-img-number">
                      <span>+97252-3529100</span>
                    </div>
                </div>
                <div id="mail-container">
                    <div id="mail-img-container">
                      <img src="https://img.icons8.com/cotton/64/000000/important-mail.png" alt="none"/>
                    </div>
                    <div id="mail-img-name">
                        <span>Israel-Israeli@gmail.com</span>
                    </div>
                  </div>
                  <div id="facebook-container">
                    <div id="facebook-img-container">
                      <img src="https://img.icons8.com/dusk/64/000000/facebook-new--v2.png" alt="none"/> 
                    </div>
                    <div id="facebook-img-name">
                        <span>Israel-Israeli</span>
                    </div>
                  </div>
            </div>
            </div>
        </div>
         );
    }
}
 
export default WhiteContainer;