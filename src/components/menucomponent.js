import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedDish: null

        };
    }
    onDishSelect(dish) {
        this.setState({ SelectedDish: dish })
    }
    renderdish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" height="50%"  src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle heading><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>

                    </CardBody>


                </Card>
            )
        }
        else {
            return
            <div></div>
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>

                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading><b>{dish.name}</b></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )

        });
        return (
            <div className="container">
                <div className="row">

                    {menu}


                </div>
                <div class = "row col-12 col-md-5">
                    {this.renderdish(this.state.SelectedDish)}
                </div>
            </div>

        );
    }
}
export default Menu;