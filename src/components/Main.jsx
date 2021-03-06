//WARNING : my file structure is little bit differrent from
// course so please change the imports accordingly. Thank you

import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu.jsx';
import DishDetail from './Dishdetail.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component{
  
  constructor(props){
    super(props);
  }
  
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  
  render(){
    
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
        );
    }
    
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        );
    };
    
    return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>

      <Footer />
    </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
