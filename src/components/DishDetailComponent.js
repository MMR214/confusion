import React, { Component } from 'react';
import { Media, Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import classes from '../App.css';

class DishDetail extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            selectedDish: null
        }
    }

    render() {

        //object menu
        const menuDished = this.props.dataComments.map((dished => {
            var cts = dished.date,
                 cdate = (new Date(cts)).toDateString();
                
            return(                    
                <div key={dished.id} className="col-12 mt-4">                    
                     <p> {dished.comment}<br />
                        -- {dished.author},  {cdate}             
                    </p>        
                </div>
                )
        }))

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%"  src={this.props.dataImage} alt= ""/>
                    <CardBody>
                        <CardTitle className={classes.dishtitle}><strong>{this.props.dataName }</strong></CardTitle>
                        <CardText>{this.props.dataDesc }</CardText>
                           
                    </CardBody>
                    </Card>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                    <div className="row">
                    <h3 className="m-2">Comments</h3>                         
                            {menuDished}
                    </div>

                    </div>
                </div>
            </div>
        );
    };

}

export default DishDetail;
