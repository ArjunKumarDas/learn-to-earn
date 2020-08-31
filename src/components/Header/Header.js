
import React from 'react';
import './Bootstrap.min.css'
import './Header.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
<Navbar variant="" bg="dark" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Business">Business</Nav.Link>
      <Nav.Link href="/Design">Design</Nav.Link>
      <Nav.Link href="/Photography">Photography</Nav.Link>
      <Nav.Link href="/Development">Development</Nav.Link>
      <Nav.Link href="/Markting">Markting</Nav.Link>
      <Nav.Link href="/IT&Softwear">IT & Softwear</Nav.Link>
      <Nav.Link href="/PersonalDevelopment">Personal Development</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Your Course" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;