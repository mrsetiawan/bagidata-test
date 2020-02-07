import React, { Component } from 'react'
import MyNavbar from '../components/MyNavbar'
import { ParentContext } from './../context'
import { Link } from 'react-router-dom'
import {
  Container,
  Col,
  Row,
  Figure
} from 'react-bootstrap'
import { AiFillLike, AiTwotoneDislike } from "react-icons/ai"
import ThumbnailVideos from './../components/ThumbnailVideos'
import Comment from '../components/Comment'

export default class DetailVideo extends Component {

  static contextType = ParentContext

  state = {
    id: this.props.match.params.id,
    loading:true,
  }

  componentDidUpdate(){
    if(this.props.match.params.id !== this.state.id){
      this.setState({
        id:this.props.match.params.id,
        loading:false,
      })
    }
  }

  handleToggle = () => this.setState({isToggle:!this.state.isToggle})

  render() {
    const { handleDetail } = this.context
    const detail = handleDetail(this.state.id)
    // console.log(detail)
    if (!detail) {
      return (
        <div className='error'>
          <h3>Video not found</h3>
          <Link to="/list" >
            Back to List
          </Link>
        </div>
      )
    }

    const { 
      title, 
      description, 
      media_url, 
      likers, 
      dislikers, 
      comments } = detail

    return (
      <>
        <MyNavbar />
        <Container>
          <section className='pt-5 pb-5'>
            <Row>
              <Col md={8} xs={12}>
                <Row>
                  <video width="100%" controls className='pb-3'>
                    <source src={media_url} type="video/mp4" />
                  </video>
                  <Col md={10} className='pl-0'>
                    <p className='capilatize'><b>{title}</b></p>
                    <small className='capilatize'>Video by : {description}</small>
                  </Col>
                  <Col md={2} className='pull-right p-0'>
                    <AiFillLike className='icon-color' /> &nbsp;
                    <span>{likers}</span> &nbsp;
                    <AiTwotoneDislike className='icon-color' /> &nbsp;
                    <span>{dislikers}</span>
                  </Col>
                  <hr style={{ border: '1px solid #f3f3f3', width: '100%' }} />
                  <Comment />
                  {comments.map((item, idx) => 
                    <Col xs={12} key={idx} className='pl-0 mt-1 mb-1'>
                      <Figure>
                        <Figure.Image className='figure-img' src='http://fh.unpad.ac.id/wp-content/uploads/2014/10/blank-avatar.jpeg' />
                        <Figure.Caption className='figure-caption'>
                          <span className='d-block'><b>user {idx + 1}</b></span>
                          <span>{item.comment}</span>
                        </Figure.Caption>
                      </Figure>
                    </Col>
                  )}
                </Row>
              </Col>
              <Col md={4} xs={12} className='pr-0'>
                <section className='recomended-height'>
                  <ThumbnailVideos />
                </section>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    )
  }
}
