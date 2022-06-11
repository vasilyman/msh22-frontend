import { rest } from 'msw';

import regionsData from './RegionsData.json';

export default rest.get(
  '/api/v1/regions/getList',
  (req, res, ctx) => res(ctx.delay(100), ctx.status(200), ctx.json(regionsData)),
);
