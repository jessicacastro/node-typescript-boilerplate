import { Router } from 'express';

const exampleRoutes = Router();

exampleRoutes.get("/example", (request, response) => {
  return response.json({ message: "Route Example"});
});

export { exampleRoutes };
