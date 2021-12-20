import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import{Nav, Form, FormControl,Button,NavDropdown, Container} from 'react-bootstrap'
import logo from '../src/logo-navbar.png'
function Menunavbar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <img src={logo}/>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Remeras</Nav.Link>
              <Nav.Link href="#action2">Buzos</Nav.Link>
              <Nav.Link href="#action3">Pantalones</Nav.Link>
              <Nav.Link href="#action4">Zapatillas</Nav.Link>
              <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action5">Bags</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Gorras</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Medias y ropa interior</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                 Skateboarding
                </NavDropdown.Item>
              </NavDropdown>
             
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="¿Que estas buscando?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default  Menunavbar
