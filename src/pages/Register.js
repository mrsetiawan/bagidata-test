import React, { Component } from 'react'
import MainBg from '../components/MainBg'
import {
  Form,
  Button,
  Card,
  Col
} from 'react-bootstrap'

import swal from 'sweetalert';
import { Redirect } from "react-router-dom";
import AuthController from '../controller/auth'

export default class Register extends Component {

  controller = new AuthController();

  state = {
    username:'',
    password:'',
    redirect:false
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.controller
    .onRegister(this.state.username, this.state.password)
    .then(res => res.data)
    .then(res => {
      swal({
        title: `Register berhasil ${res.msg}`,
        icon: "success",
        buttons: true,
      })
      this.setState({
        redirect: true
      });
    })
    .catch(error => {
      swal({
        title: `Register Failed`,
        icon: "warning",
        buttons: true,
      })
    });
  }

  render() {
    
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <MainBg>
        <Col md={3} xs={12}>
          <Card>
          <Card.Body>
            <p className='text-center'><b>Form Register</b></p>
            <br />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter UserName" 
                  className='input-comment'
                  onChange={({ target }) => this.setState({ username: target.value })} 
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  className='input-comment'
                  onChange={({ target }) => this.setState({ password: target.value })} 
                />
              </Form.Group>
              <Button variant="success" type="submit" block>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </MainBg>
    )
  }
}
