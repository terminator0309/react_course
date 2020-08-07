import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu.jsx';
import DishDetail from './Dishdetail.jsx';
import { DISHES } from '../shared/dishes.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import { COMMENTS } from '../shared/comments.js';
import { PROMOTIONS } from '../shared/promotions.js';
import { LEADERS } from '../shared/leaders.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null
    };
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  
  render(){
    
    const HomePage = () => {
      return (
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
        );
    }
    
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      
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
