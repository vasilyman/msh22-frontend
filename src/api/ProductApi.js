import API from './Api';

class ProductApi {
  static getList(params) {
    return API.request({
      method: 'GET',
      url: 'api/v1/product/getList',
      params,
    });
  }
}

export default ProductApi;
