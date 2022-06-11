import { setupWorker } from 'msw';
import { isMockedProduct } from '@/utils/env';

import userHandler from './user/userHandler';
import RegionsHandler from './Regions/RegionsHandler';
import ProductDataColumnsHandler from './ProductData/ProductDataColumnsHandler';
import ProductDataListHandler from './ProductData/ProductDataListHandler';

const handlers = [
  userHandler,
  RegionsHandler,
];

if (isMockedProduct()) {
  handlers.push(
    ProductDataListHandler,
    ProductDataColumnsHandler,
  );
}

export default setupWorker(...handlers);
