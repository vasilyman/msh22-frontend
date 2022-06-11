import { rest } from 'msw';

import listData from './listData.json';

export default rest.get(
  '/api/v1/productData/getList',
  (req, res, ctx) => res(ctx.delay(1000), ctx.status(200), ctx.json(listData)),
);
