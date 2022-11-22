import React, { Component } from 'react';
import { Nav, Col } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <Col md={8}>
                            <span className="logo">Film</span>
                        </Col>
                        <Col md={4}>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href="#">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#">Contacts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;