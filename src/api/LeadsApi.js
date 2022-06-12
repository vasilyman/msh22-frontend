import API from './Api';

class LeadsApi {
  static getCountBySource() {
    return API.request({
      method: 'GET',
      url: 'api/v1/leads/getCountBySource',
    });
  }
}

export default LeadsApi;
