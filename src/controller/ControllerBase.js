const { apiEndPoint } = require("./config");
const axios = require("axios");

export default class ControllerBase {
  apiEndPoint = apiEndPoint;
  axios;

  constructor() {
    const jwt = localStorage.getItem("token");
    this.axios = axios.create({
      baseURL: this.apiEndPoint,
      headers: {
        Authorization: jwt
      }
    });

    this.axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
        }
        return Promise.reject(error);
      }
    );
  }
}
