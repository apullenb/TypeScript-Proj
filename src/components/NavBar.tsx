import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar