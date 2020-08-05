import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu.jsx';
import DishDetail from './Dishdetail.jsx';
import { DISHES } from '../dishes.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


class Main extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  
  render(){
    return (
    <div className="App">
    <Header />
      <Menu dishes={this.state.dishes} onclick={(dishId) => this.onDishSelect(dishId)} />
      
      <div className="container">
        <div className="row" >
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Main;
