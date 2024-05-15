import {
  Table,
  Column,
  Model,
  IsEmail,
  Unique,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Order } from 'src/orders/entities/order.entity';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @HasMany(() => Order)
  orders: Order[];
}
