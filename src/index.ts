import express from 'express';
import type { Request, Response } from 'express';
import { apiReference } from '@scalar/express-api-reference'

const port = process.env.PORT || 2077;

const app = express();
app.use("/", express.static(__dirname + "/public"));

app.use(
  '/api-docs',
  apiReference({
    theme: 'keplar',
    spec: {
       url: '/openapi.yaml',
    },
  }),
)

app.listen(port, () => {
  console.log(`server running on port ${port}, safe travels netrunner.`);
});

app.get('/status', (req: Request, res: Response) => {
  res.send('You don\'t make a name for yourself in night city by how you live...');
});
