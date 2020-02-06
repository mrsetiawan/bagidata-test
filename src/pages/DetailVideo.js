import React, { Component } from 'react'
import { ParentContext } from './../context'
import { Link } from 'react-router-dom'

export default class DetailVideo extends Component {

  static contextType = ParentContext

  state = {
    id:this.props.match.params.id
  }

  // componentDidMount() {
  //   this.setState({id:this.props.match.params.id})
  // }

  render() {
    // console.log(this.state.id)
    const { handleDetail } = this.context
    const detail = handleDetail(this.state.id)

    if(!detail){
      return (
        <div className='error'>
          <h3>Video not found</h3>
          <Link to ="/list" >
            Back to List
          </Link>
        </div>
      )
    }

    const { id,title,description,media_url,likers,dislikers,comments} = detail
    // console.log(detail)
    return (
      <div>
        {description}
      </div>
    )
  }
}
