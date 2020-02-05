const { apiEndPoint } = require('./config')
const axios = require('axios')

class Auth {

  apiEndPoint = apiEndPoint;
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: this.apiEndPoint
    });
  }

  onLogin = (username, password) => {
    return this.axios.post(`${apiEndPoint}login`, {
      username: username,
      password: password,
    })
  }

  onRegister = (username,password) => {
    return axios.post(`${apiEndPoint}register`, {
      username: username,
      password: password,
    })
  }

}

export default Auth
