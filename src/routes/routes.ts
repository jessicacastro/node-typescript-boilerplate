import { Router } from 'express';

import { exampleRoutes } from './example.routes';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'API works! Go code!' }));


routes.get('/example', exampleRoutes);



export default routes;
