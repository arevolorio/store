import React from 'react';
import CardList from '../../content/card-list/card-list';
import { Container, Row } from 'reactstrap';

const Home = (props) => (
    <Container className="mt-5">
        <Row>
            <CardList items={props.sections} cardBody="product" lg="6" imageSize="large-image"/>
        </Row> 
    </Container>
);

export default Home;