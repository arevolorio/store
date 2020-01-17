import React from 'react';
import Card from '../card/card';
import { Container, Col, Row} from 'reactstrap';

const CardList = (props) => (
  <Container>
      <Row>
            {
            props.limit?
                (props.items
                    .filter((item, index) => index < props.limit)
                    .map( ({id, ...otherProps}) => (
                        <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl}>
                            <Card 
                                key={id}
                                cardBody={props.cardBody}
                                {...otherProps} />
                        </Col>
                    ))
                )
            :
                (props.items
                    .map( ({id, ...otherProps}) => (
                        <Col key={id} xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl}>
                            <Card 
                                cardBody={props.cardBody}
                                imageSize={props.imageSize}
                                {...otherProps} />
                        </Col>
                    ))
                )
            }
      </Row>
  </Container>
);
export default CardList;