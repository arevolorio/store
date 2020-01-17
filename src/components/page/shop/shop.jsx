import React from 'react';
import CardList from '../../content/card-list/card-list';
import { Container, Row } from 'reactstrap';

import SHOP_DATA from '../../../data/products'

class Shop extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            products : SHOP_DATA
        };
    }

    render(){
        return (
            <Container className="mt-5">
                {
                    this.state.products.map(({id, title, items,...otherProps}) => (
                        <Row key={id}>
                            <h1 className="text-right">{title.toUpperCase()}</h1>
                            <CardList items={items} cardBody="product" lg="3" limit="4"/>
                        </Row> 
                    ))
                }
                
            </Container>
        );
    }
}

export default Shop;