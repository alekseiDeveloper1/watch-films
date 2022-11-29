import React from 'react';
import Header from '../components/Header';
import FavoriteItem from '../components/FavoriteItem';
import {Container} from 'react-bootstrap';

const FavoritePage = () => {
    return (
        <div>
            <Header />
            <Container>
                <FavoriteItem/>
            </Container>
        </div>
    );
};

export default FavoritePage;