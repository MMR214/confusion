import React, {Component } from 'react';
import { Media, Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import DishDetail from '../components/DishDetailComponent';
import classes from '../App.css';


class Menu extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            selectedDish: null
        }

        this.state = {
            selectedDishComments: null
        }

    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
        this.setState({selectedDishComments: dish.comments})
    }


    
    renderDish(selectedDish){
        if(selectedDish != null){
            return(
               <DishDetail 
               dataId = { selectedDish.id} 
               dataImage = { selectedDish.image}
               dataName = { selectedDish.name }
               dataDesc = { selectedDish.description} 
               dataComments = {selectedDish.comments }             
               />
            )
        }else{
            return(
                <div></div>
            );
        }
    }


    render() {

        //object menu
        const menu = this.props.dishes.map((dish => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>                   
                        <CardImg width="100%"  src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle className={classes.dishtitle}>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }))

        return(
            <div className="container">
                <div className="row">                 
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}

                </div>
            </div>
        );
    };
}

export default Menu;