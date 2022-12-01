import React from 'react';
import Header from '../components/Header';
import FavoriteItem from '../components/FavoriteItem';
import {Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';


const FavoritePage = () => {

    const favorite = useSelector(state => state.favorite)
    return (
        <div>
            <Header />
            <Container>

                {favorite ? favorite.map(id => 
                    <FavoriteItem element={id}/>
                ): true}
                
            </Container>
        </div>
    );
};

export default FavoritePage;