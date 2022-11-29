import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

const FavoriteItem = () => {
    return (
        <Row className={'mt-5'}>
            <Col md={2}></Col>
            <Col md={3}>
                <Card>
                    <Card.Img
                        width={'100%'}
                        height={'300px'}
                        variant="top"
                    />
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FavoriteItem;