import React from 'react'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap'
import logo from '../navbar/logo-navbar.png'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'

function Menunavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/'>
          <img alt='imgLogo' src={logo} />
        </Link>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='navBarProd' to='/categoria/remeras' href="#action1">Remeras</Link>
            <Link className='navBarProd' to='/categoria/buzos' href="#action2">Buzos</Link>
            <NavLink className='navBarProd' to='/categoria/pantalones' href="#action3">Pantalones</NavLink>
            <NavLink className='navBarProd' to='/categoria/zapatillas' href="#action4">Zapatillas</NavLink>
            <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
              <Link to='/categoria/bags'>
                <NavDropdown.Item className='navBarProd' href="#action5">Bags</NavDropdown.Item>
              </Link>
              <Link to='/categoria/medias'>
                <NavDropdown.Item className='navBarProd' href="#action7">Medias y ropa interior</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to='/categoria/skate'>
                <NavDropdown.Item className='navBarProd' id='prueba' href="#action8">
                  Skateboarding
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

          </Nav>
          <Link to='/cart'>
            <CartWidget />
          </Link>
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

export default Menunavbar
