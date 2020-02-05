import React, { Component } from 'react'
import MainBg from '../components/MainBg'
import {
  Form,
  Button,
  Card,
  Col
} from 'react-bootstrap'
import swal from 'sweetalert';
import { Redirect, Link } from "react-router-dom";
import AuthController from '../controller/auth'

class Login extends Component {

  controller = new AuthController();

  state = {
    username: '',
    password: '',
    redirect: false
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.controller
      .onLogin(this.state.username, this.state.password)
      .then(res => res.data)
      .then(res => {
        swal({
          title: `Login Success ${res.msg}`,
          icon: "success",
          buttons: true,
        })
        localStorage.setItem("token", res.data);
        this.setState({
          redirect: true
        });
      })
      .catch(res => {
        swal({
          title: `Login Failed`,
          icon: "warning",
          buttons: true,
        })
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/list" />
    ) : (
        <MainBg>
          <Col md={3} xs={12}>
            <Card>
              <Card.Body>
                <p className='text-center'><b>Form Login</b></p>
                <br />
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter UserName"
                      required
                      onChange={({ target }) => this.setState({ username: target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      onChange={({ target }) => this.setState({ password: target.value })}
                    />
                  </Form.Group>
                  <Link to='/register'>
                    <p className='pull-right'>Register</p>
                  </Link>
                  <Button variant="primary" type="submit" block>
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

export default Login
