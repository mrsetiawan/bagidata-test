import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeHTMLTags } from '../helpers.js'

export default class ListVideoChild extends Component {
  render() {

    const { id, title,media_url } = this.props.list
    let str = media_url.split("/")
    return (
      <Col md={3} sm={4} xs={12} className='mb-3'>
        <Link to={`/list/${id}`}> 
          <article className='thumb'>
            <img src={`https://img.youtube.com/vi/${str[str.length-1]}/hqdefault.jpg`} alt="" width="100%" height="260px" />
            <p className='title-info'>{removeHTMLTags(title.substring(0, 30)) + '...'}</p>
          </article>
        </Link>
      </Col>
    )
  }
}