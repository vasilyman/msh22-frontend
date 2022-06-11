import API from './Api';

class RegionPredictApi {
  static getList(params) {
    return API.request({
      method: 'GET',
      url: 'v1/region/predict',
      params,
    });
  }
}

export default RegionPredictApi;
