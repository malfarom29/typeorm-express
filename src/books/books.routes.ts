import { Router, Request, Response } from 'express';
import { dbConnection } from '../datasource';
import { Book } from './book.entity';

export default () => {
  const router = Router();

  router.route('').post(async (req: Request, res: Response) => {
    const { title } = req.body;
    const book = await dbConnection.getRepository(Book).save({ title });

    res.json(book);
  });

  return router;
};
