import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'
import { removeHTMLTags } from '../helpers.js'

export default class ListVideoChild extends Component {
  render() {

    const { id,title } = this.props.list
    return (
      <Col md={4} className='mb-3'>
        <article className='thumb'>
          <img src="https://geekltd.com/wp-content/uploads/2017/08/play-youtube-11.jpg" alt="" width="100%" />
          <p className='title-info'>{removeHTMLTags(title.substring(0,30)) + '...'}</p>
        </article>
      </Col>
    )
  }
}