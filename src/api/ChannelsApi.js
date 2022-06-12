import API from './Api';

class ChannelsApi {
  static getList() {
    return API.request({
      method: 'GET',
      url: '/v1/telegram',
    });
  }
}

export default ChannelsApi;
