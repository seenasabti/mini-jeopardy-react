class Data {
  constructor() {
    this.api = 'http://www.jservice.io/api/';
  }

  encode(params) {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
  }

  async get(params, endpoint = 'clues') {
    try {
      let response = await fetch(
          this.api + endpoint + '?' + this.encode(params),
      );
      return {success: true, data: await response.json()}
    } catch (err) {
      return {success: false, data: []}
    }
  }
}

export default Data