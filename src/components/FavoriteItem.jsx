import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const FavoriteItem = ({element}) => {
    const card = useSelector(state => state.cards[element.id - 1])
    return (
        <Row className={'mt-5'}>
            <Col md={2}></Col>
            <Col md={3}>
                <Card>
                    <Card.Img
                        src={card.img}
                        width={'100%'}
                        height={'300px'}
                        variant="top"
                    />
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.desc}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FavoriteItem;