import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CardItem = ({prop}) => {
    return (
        <Col md={3}>
            <Card style={{ height: '762px' }}>
                <Card.Img variant="top" height={'450px'} src={prop.img} />
                <Card.Body>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Text>{prop.desc}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardItem;