import React from 'react';
import { Row } from 'react-bootstrap';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';



const CardList = () => {
    const data = useSelector(state => state.cards)
    return (
        <Row>
            {data.map(card => 
                <CardItem prop={card}/>
            )}
        </Row>
        
    );
};

export default CardList;