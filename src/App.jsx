import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from '../components/Menu.jsx';

class App extends Component{
  render(){
    return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Hello World</NavbarBrand>  
        </div>
      </Navbar>
      <Menu />
    </div>
    );
  }
}

export default App;
