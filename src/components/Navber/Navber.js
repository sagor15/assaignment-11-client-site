import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navber.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const auth = getAuth(app);

const Navber = () => {
    const [user , setUser] = useState({});

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
        //   const uid = user?.uid;
        setUser(user);
         
        } else {
          setUser({});
        }
      });
  },[])

  const handleSignOut = () =>{
    signOut(auth).then(() => {
        toast('Sign out successfull')
      }).catch((error) => {
        // An error happened.
        console.log(error.messege);
      });
}

    return (
        <div className='shado'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href='/' className='textShadow' > <span className='text-danger fs-5'> GYM</span> Equipment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/inventoryitem">Inventory</Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            
                             {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
                               
                                <NavDropdown.Divider />
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            {/* </NavDropdown>  */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"> </Nav.Link>
                            {
                                user?.uid? <Nav.Link onClick={handleSignOut} eventKey={2} as={Link} to="/login"> Sign Out </Nav.Link>:<Nav.Link eventKey={2} as={Link} to="/login"> Login </Nav.Link>
                                
                          
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </div>
    );
};

export default Navber;