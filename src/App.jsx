import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/Main.jsx';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <BrowserRouter>  
    <React.Fragment>
      <Main />
    </React.Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
