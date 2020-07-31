import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu.jsx';
import { DISHES } from './dishes.js';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  
  render(){
    return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Hello World</NavbarBrand>  
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
    </div>
    );
  }
}

export default App;
