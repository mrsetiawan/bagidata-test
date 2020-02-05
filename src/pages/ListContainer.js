import React, { Component } from 'react'
import MyNavbar from '../components/MyNavbar'
import listVideoController from '../controller/listVideo'
import MainBg from '../components/MainBg'
import {
  Row
} from 'react-bootstrap'

import Title from '../components/Title'
import ListVideoChild from './ListVideoChild'

export default class ListVideo extends Component {

  controller = new listVideoController

  state = {
    list: [],
    loading: true
  }

  componentDidMount() {
    this.controller.getList()
      .then(res => res.data)
      .then(res => {
        this.setState({
          list: res.data,
          loading: false
        })
      })
  }

  render() {
    const { list, loading } = this.state

    console.log(list)

    return loading ? (
      <p>loading...</p>
    ) : (
        <>
          <MyNavbar />
          <MainBg bg='bg-list' />
          <section className='p-5'>
            <Title title='List Video' />
            <Row>
              {list.map((_list, _idx) =>
                <ListVideoChild key={_idx} list={_list} />
              )}
            </Row>
          </section>
        </>
      )

  }
}
