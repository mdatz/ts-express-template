import express from 'express';
import type { Request, Response } from 'express';

const port = process.env.PORT || 2077;

const app = express();
app.listen(port, () => {
  console.log(`server running on port ${port}, safe travels netrunner.`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('You don\'t make a name for yourself in night city by how you live...');
});
