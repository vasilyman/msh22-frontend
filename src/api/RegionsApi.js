import API from './Api';

class RegionsApi {
  static getColumns() {
    return API.request({
      method: 'GET',
      url: 'api/v1/regions/getList',
    });
  }
}

export default RegionsApi;
