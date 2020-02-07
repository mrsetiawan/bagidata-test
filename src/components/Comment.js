import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
import {
  Button,
  Form
} from 'react-bootstrap'

export default class Comment extends Component {

  state = {
    response: false,
    endpoint: "https://bagidata.com:3030/video",
    isToggle:true
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    console.log(socket)
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  handleToggle = () => this.setState({isToggle:!this.state.isToggle})

  render() {
    
    const { isToggle,response  } = this.state
    console.log(response)
    return (
      <>
        <Form.Control 
          type="text" 
          placeholder="Comment here" 
          className='input-comment' 
          onClick={this.handleToggle}
        />
        {isToggle ? null : <Button variant='success' size='sm' style={{float: 'right'}}>Comment</Button>}
      </>
    )
  }
}
