import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Author } from 'src/authors/entities/author.entity';
import { Order } from 'src/orders/entities/order.entity';

@Table
export class Book extends Model{

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  title: string;

  @ForeignKey(() => Author)
  @Column({
    type: DataType.INTEGER,
    field: 'authorId',
  })
  authorId: number;

  @BelongsTo(() => Author)
  author: Author;

  @HasMany(() => Order)
  orders: Order[];
}
