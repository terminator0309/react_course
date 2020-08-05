import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/Main.jsx';

class App extends Component{
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <React.Fragment>
      <Main />
    </React.Fragment>
    );
  }
}

export default App;
