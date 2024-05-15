import { Sequelize } from 'sequelize-typescript';
import { Author } from 'src/authors/entities/author.entity';
import { Book } from 'src/books/entities/book.entity';
import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { config } from 'dotenv';
import { Dialect } from 'sequelize';

config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: <Dialect>process.env.DB_DIALECT || 'postgres',
        logging: process.env.DB_LOGGING === 'true' ? true : false,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Author, Book, Order, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];