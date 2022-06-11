import API from './Api';

class UserApi {
  static getUser(id) {
    return API.request({
      method: 'GET',
      url: `api/v1/users/${id}`,
    });
  }
}

export default UserApi;
