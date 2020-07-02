/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/** @format */

import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Home.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" className="fixed-top">
        <Container>
          <Navbar.Brand
            href="home"
            style={{color: 'white', paddingLeft: '10px', fontWeight: 'bold'}}
          >
            BRI LIFE TEST
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{color: 'white'}}>
              HOME
            </Nav.Link>
            <NavDropdown
              title={<span className="text-white my-auto">DATA</span>}
            >
              <NavDropdown.Item href="provinsi">DATA PROVISI</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="kontrasepsi">
                DATA KONTRASEPSI
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="pemakai">DATA PEMAKAI</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" style={{color: 'white'}}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
