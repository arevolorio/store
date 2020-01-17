import React from 'react';
import CardList from '../../content/card-list/card-list';

const Home = (props) => (
    <div className="container mt-5">
        <div className="row">
            <CardList items={props.sections} cardBody="product" lg="6"/>
        </div> 
    </div>
);

export default Home;