import API from './Api';

class ClientDataApi {
  static upload(data) {
    return API.request({
      method: 'POST',
      url: 'v1/file',
      data,
    });
  }
}

export default ClientDataApi;
