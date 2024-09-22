class demoAxios {
  /**
   *
   * @param {string} baseURL folder in src to store mock files
   */
  create({ baseURL = undefined, headers: { Authorization = "" } }) {
    this.baseURL = baseURL;
    this.headers = this.headers;
  }

  post(path = "", data = {}, config = {}) {}
}

const axios = demoAxios();

export default axios;
