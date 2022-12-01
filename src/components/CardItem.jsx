import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
const CardItem = ({prop}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const addFavorite = (id) => {
        console.log('ih');
        dispatch({type: 'ADD_FAVORITE', id})
    }
    return (
        <Col md={3}>
            <Card style={{ height: '762px' }}>
                <Card.Img 
                variant="top" 
                height={'450px'} 
                src={prop.img} 
                onClick={() => navigate('/' + prop.id)}/>
                <Card.Body>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Text>{prop.desc}</Card.Text>
                    <Button onClick={() => {addFavorite(prop.id)}} variant="primary">Add Favorite</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardItem;