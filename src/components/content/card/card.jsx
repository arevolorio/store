import React from 'react';
import { Button, Card, CardBody, CardText, CardImg } from 'reactstrap';
import './card.scss';
import { Link } from 'react-router-dom';

const StoreCard = ({cardBody, title, name, description, imageUrl , link, buttonLabel, price}) => (

    <Card className="card-item">
        { imageUrl?
            <CardImg className="card-image" top width="100%" height="80%" src={imageUrl} alt={title} />
        :
            null
        }
        {buttonLabel?
            <CardBody className={cardBody}>
                { title?
                    <h1>{title.toUpperCase()}</h1>
                :
                    null
                }
                { name?
                    <h1>{name.toUpperCase()}</h1>
                :
                    null
                }
                { price?
                    <h3 className="text-right">${price}</h3>
                :
                    null
                }
                { description ?
                    <CardText className="card-text">{description}</CardText>
                :
                    null
                }
                {buttonLabel?
                    <Button>{buttonLabel}</Button>
                :
                    null
                }
            </CardBody>
        :
         <Link to={link}>
            <CardBody className={cardBody}>
                { title?
                    <h1>{title.toUpperCase()}</h1>
                :
                    null
                }
                { price?
                    <h3 className="text-right">${price}</h3>
                :
                    null
                }
                { description ?
                    <CardText className="card-text">{description}</CardText>
                :
                    null
                }
                {buttonLabel?
                    <Button>{buttonLabel}</Button>
                :
                    null
                }
            </CardBody>
         </Link>
        }
    </Card>
);

export default StoreCard;