import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [BooksModule, OrdersModule, UsersModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
