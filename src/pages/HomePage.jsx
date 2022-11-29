import React from 'react';
import Header from "../components/Header";
import {Container} from "react-bootstrap";
import NavBar from "../components/NavBar";
import CardList from "../components/CardList";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Container>
                <NavBar/>
                <CardList/>
            </Container>
        </>
    );
};

export default HomePage;