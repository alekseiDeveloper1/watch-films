import React from 'react';
import { Nav } from 'react-bootstrap';
const NavBar = () => {

    const category = [
        {id:1, name: 'comedy'},
        {id:2, name: 'fantasy'},
        {id:3, name: 'Adventure'},
    ]

    return (
        <Nav>
            {category.map(category => 
                <Nav.Item>
                    <Nav.Link href="/home">{category.name}</Nav.Link>
                </Nav.Item>
            )}
        </Nav>
    );
};

export default NavBar;