import API from './Api';

class ProductDataApi {
  static getColumns() {
    return API.request({
      method: 'GET',
      url: 'api/v1/productData/getColumns',
    });
  }

  static getList(params) {
    return API.request({
      method: 'GET',
      url: 'api/v1/productData/getList',
      params,
    });
  }
}

export default ProductDataApi;
