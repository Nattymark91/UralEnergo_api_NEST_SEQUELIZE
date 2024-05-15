import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Book } from 'src/books/entities/book.entity';

@Table
export class Author extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @HasMany(() => Book)
  books: Book[];

  initialAutoIncrement: 10
}
