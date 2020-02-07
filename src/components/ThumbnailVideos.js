import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ParentContext } from './../context'
import {
  Row,
  Col,
  Card
} from 'react-bootstrap'
import { removeHTMLTags } from '../helpers.js'

export default class ThumbnailVideos extends Component {

  static contextType = ParentContext;

  render() {
    const { list } = this.context

    let thumb = list.map((item, idx) => {
    let str = item.media_url.split("/")
      return (
        <div key={idx}>
          <Link to={`/list/${item.id}`}>
            <Col xs={12} className='mb-3'>
              <Card>
                <Card.Body className='p-0'>
                  <Row>
                    <Col xs={5} className='p-0'>
                      <img src={`https://img.youtube.com/vi/${str[str.length-1]}/hqdefault.jpg`} alt={item.title} width='100%' />
                    </Col>
                    <Col xs={7}>
                      <small style={{ display: 'block', marginBottom: '10px' }}>
                        {removeHTMLTags(item.title.substring(0, 30)) + '...'}
                      </small>
                      <small>
                      {removeHTMLTags(item.description.substring(0, 30)) + '...'}
                    </small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        </div>
      )
    })
    return (
      <Row>
        {thumb}
      </Row>
    )
  }
}
