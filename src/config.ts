export default {
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    schema: process.env.DB_SCHEMA || 'public',
    migrations: process.env.DB_MIGRATIONS || 'src/migrations/*.ts',
    entities: process.env.DB_ENTITIES || 'src/**/*.entity.ts',
  },
  app: {
    port: Number(process.env.PORT) || 3000,
  },
};
