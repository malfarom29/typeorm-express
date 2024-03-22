import { DataSource } from 'typeorm';
import config from './config';
import { Book } from './books/book.entity';

export const dbConnection = new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  schema: config.db.schema,
  migrations: [__dirname + '/migrations/*.js'],
  entities: [__dirname + '/**/*.entity.js'],
});

dbConnection
  .initialize()
  .then(() => {
    console.log('Database connection established');
  })
  .catch((error) => {
    console.error('Database connection failed', error);
  });
