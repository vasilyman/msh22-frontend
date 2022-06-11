import { rest } from 'msw';

import user1 from './user1Data.json';

export default rest.get('/api/v1/users/:id', (req, res, ctx) => {
  const { id } = req.params;

  if (id !== undefined) {
    switch (id) {
      case '1':
        return res(ctx.delay(1000), ctx.status(200), ctx.json(user1));
      default:
        return res(ctx.delay(1000), ctx.status(404));
    }
  }
  return res(ctx.delay(1000), ctx.status(401));
});
