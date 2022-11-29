import React from 'react';
import Header from "../components/Header";
import {Card, Col, Container, Row} from "react-bootstrap";
const FilmPage = () => {

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col className={'mt-5'} md={'9'}>
                        {/* <Iframe url={}
                                width="640px"
                                height="320px"
                                id=""
                                className=""
                                display="block"
                                position="relative"/> */}
                    </Col>
                    <Col className={'mt-5'} md={'3'}>
                        <Card>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FilmPage;