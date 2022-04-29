import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navber.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navber = () => {
    return (
        <div className='shado'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href='/' className='textShadow' > <span className='text-danger fs-5'> GYM</span> Equipment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/inventoryitem">Home</Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
                               
                                <NavDropdown.Divider />
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            {/* </NavDropdown>  */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"> </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;