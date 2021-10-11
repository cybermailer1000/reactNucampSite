import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsite: null,
        };
    }

    renderComments(comments) {
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => this.return(
                        <div key={this.props.campsite.id}>
                        {comment.text}
                        {comment.author}, {comment.date}</div>))};
                </div>
            );
        }
        return <div />
    }

    renderCampite(campsite) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    render() {
        if (this.props.campsite) {
          return (
            <div className="row">
              {this.renderCampsite(this.props.campsite)}
              {this.renderComments(this.props.campsite.comments)}
            </div>
          );
        }
        return <div />
    }
}

    export default CampsiteInfo;