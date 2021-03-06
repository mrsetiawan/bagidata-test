import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Form,
  Button,
  Nav,
  Container
} from 'react-bootstrap'
import logo from '../logo.svg'

export default class MyNavbar extends Component {

  onLogout = () => {
    localStorage.clear();
    window.location = "/";
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to='/list'>
              <img alt="bagi data" src={logo} width="30" height="30" className="d-inline-block align-top"/>
              <span className='text-white'>Bagidata.com</span>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto" />
          <Form inline>
            <Button variant="outline-success" onClick={this.onLogout}>Logout</Button>
          </Form>
        </Container>
      </Navbar>
    )
  }

}
