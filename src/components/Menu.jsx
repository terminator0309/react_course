import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './Dishdetail.jsx';

function RenderMenuItems({dish, onclick}){
  return (
    <Card key={dish.id} onClick={() => onclick(dish.id)} >
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
    );
}

  const Menu = props => {
    const menu = props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <RenderMenuItems dish={dish} onclick={props.onclick} />
        </div>
        );
    });
    
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
      </div>
      );
  }

export default Menu;