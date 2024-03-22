import express, { Request, Response } from 'express';
import config from './config';
import { dbConnection } from './datasource';
import booksRoutes from './books/books.routes';
import { createServer } from 'http';
import bodyParser from 'body-parser';

const app = express();
const server = createServer(app);
const port = config.app.port;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use('/books', booksRoutes());

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
