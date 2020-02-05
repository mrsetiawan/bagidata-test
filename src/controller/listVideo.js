import ControllerBase from './ControllerBase'

class listVideo extends ControllerBase {
  getList = () => {
    return this.axios.get('video')
  }
}

export default listVideo
