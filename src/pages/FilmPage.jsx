import React from 'react';
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import {Card, Col, Container, Row} from "react-bootstrap";
import { useSelector } from 'react-redux';
import Iframe from 'react-iframe';

const FilmPage = () => {

    const params = useParams();
    const id = params.id - 1;
    
    const data = useSelector(state => state.cards[id])

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col className={'mt-5'} md={'9'}>
                        <Iframe url={data.video}
                                width="640px"
                                height="320px"
                                id=""
                                className=""
                                display="block"
                                position="relative"/>
                    </Col>
                    <Col className={'mt-5'} md={'3'}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>{data.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FilmPage;