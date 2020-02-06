import React, { Component } from 'react'
import MyNavbar from '../components/MyNavbar'
import MainBg from '../components/MainBg'
import { Row } from 'react-bootstrap'
import Title from '../components/Title'
import ListVideoChild from './ListVideoChild'
import { ParentContext } from '../context'
 
export default class ListVideo extends Component {
  static contextType = ParentContext;

  render() {

    let { list,loading } = this.context;

    list = list.map(myList => <ListVideoChild key={myList.id} list={myList} />)
    return(
      <>
        <MyNavbar />
        <MainBg bg='bg-list' />
        <section className='p-5'>
          <Title title='List Video' />
          <Row>
            {loading ? "loading..." : list}
          </Row>
        </section>
      </>
    )

  }
}
