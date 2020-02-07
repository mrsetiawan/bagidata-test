import React, { Component } from 'react'
import listVideoController from './controller/listVideo'

const ParentContext = React.createContext();

class VideoContext extends Component {

  controller = new listVideoController();

  state = {
    list:[],
    loading:true
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

  handleDetail = id => {
    // let detail = Object.assign({}, [...this.state.list]);
    let detail = [...this.state.list]
    const getId = detail.find(el => el.id == id)
    return getId
  }

  render() {
    return (
      <ParentContext.Provider value={{...this.state, handleDetail:this.handleDetail}}>
        {this.props.children}
      </ParentContext.Provider>
    )
  }
}

const VideoConsumer = ParentContext.Consumer;

export  { VideoContext,ParentContext,VideoConsumer }
