import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle , Media } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(Comments){
    //console.log(Comments[0].comment);
    const commentList = Comments.map((comments) => {
      return (
      <div key={comments.id} className="col-12">
        <p>{comments.comment}</p>
        <p>--{comments.author}, {comments.date}</p>
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
  
  renderDish(clickedDish) {
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
  render(){
    if(this.props.dish != null)
    return(
      <React.Fragment>
      
      {this.renderDish(this.props.dish)}
      {this.renderComments(this.props.dish.comments)}
      
      </React.Fragment>
      );
      else{
        return (<div></div>);
      }
  }
}

export default Dishdetail;