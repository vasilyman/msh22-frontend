import { setupWorker } from 'msw';

import userHandler from './user/userHandler';

const handlers = [
  userHandler,
];

export default setupWorker(...handlers);
