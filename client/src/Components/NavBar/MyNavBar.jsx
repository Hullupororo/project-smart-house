import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Nav, Navbar, Button, Container,
} from 'react-bootstrap';

function MyNavBar() {
  const user = useSelector((state) => state.user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user?.id
              ? (
                <Nav className="pipe-separate mgL t-light-green left">
                  <Button className="nav-link" variant="link">
                    Logout
                  </Button>
                </Nav>
              )
              : (
                <>
                  <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/auth/registration">Sign Up</NavLink></Nav>
                  <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/auth/authorization">Sign In</NavLink></Nav>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
