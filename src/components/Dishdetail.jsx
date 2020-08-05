import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle , Media } from 'reactstrap';

  function RenderComments({Comments}){
    const commentList = Comments.map((comments) => {
      console.log(comments.comment);
      return (
      <div key={comments.id} className="col-12">
        <p>{comments.comment}</p>
        <p>-- {comments.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
      </div>
      );
    });
    console.log(commentList);
    return(
      <div className="col-12 col-md-5 m-1">
      <h4>COMMENTS</h4>
        {commentList}
      </div>
      );
  }
  
  function RenderDish({clickedDish}) {
    if (clickedDish != null){
    return(
        <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={clickedDish.image} alt={clickedDish.name} />
          <CardBody>
          <CardTitle>{clickedDish.name}</CardTitle>
            <CardText>{clickedDish.description}</CardText>
          </CardBody>
        </Card>
        </div>
        );
    }
      else{
        return (<div></div>);
      }
  }
  const DishDetail = props => {
    if(props.dish != null && props.dish != undefined){
    return(
      <React.Fragment>
        <RenderDish clickedDish={props.dish} />
        <RenderComments Comments={props.dish.comments} />
      </React.Fragment>
      );
    }
      else{
        return (<div></div>);
      }
  }

export default DishDetail;