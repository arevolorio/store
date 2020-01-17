import React from 'react';
import CardList from '../../content/card-list/card-list';
import Carousel from '../../content/carousel/carousel';
import { Container, Row } from 'reactstrap';

const Home = (props) => (
    <div>
        <Carousel/>
        <Container className="mt-5">
            <Row>
                <CardList items={props.sections} cardBody="product" lg="6" imageSize="large-image"/>
            </Row> 
        </Container>
    </div>
);

export default Home;