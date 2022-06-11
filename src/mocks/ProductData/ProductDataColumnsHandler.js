import { rest } from 'msw';

import columnsData from './columnsData.json';

export default rest.get(
  '/api/v1/productData/getColumns',
  (req, res, ctx) => res(ctx.delay(500), ctx.status(200), ctx.json(columnsData)),
);
