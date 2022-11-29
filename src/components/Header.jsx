import React from 'react';
import { Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
                <div className="container">
                    <div className="row">
                        <Col md={8}>
                            <span className="logo">Film</span>
                        </Col>
                        <Col md={4}>
                            <Nav>
                                <Link to="/">Home</Link>
                                <Link to="/add">Add Card</Link>
                                <Link to="/favorite">Favorite</Link>
                            </Nav>
                        </Col>
                    </div>
                </div>
            </header>
    );
};

export default Header;