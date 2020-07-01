import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HeadBlueContainer from "./containers/headBlueContainer"
import WhiteContainer from "./containers/whiteContainer";
import MiddleContainer from "./containers/middleContainer";



class App extends Component {
  state = {  }

  render() { 
    return ( 
      <body>
        <HeadBlueContainer />
        < WhiteContainer />
        <MiddleContainer />


      </body>
     );
  }
}
 


export default App;
