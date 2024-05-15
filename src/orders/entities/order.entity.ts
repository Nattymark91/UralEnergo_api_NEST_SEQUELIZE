import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  DataType
} from 'sequelize-typescript';
import { Book } from 'src/books/entities/book.entity';
import { User } from 'src/users/entities/user.entity';

@Table
export class Order extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    field: 'bookId',
  })
  bookId: number;

  @BelongsTo(() => Book)
  books: Book;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'userId',
  })
  userId: number;

  @BelongsTo(() => User)
  users: User;

}
