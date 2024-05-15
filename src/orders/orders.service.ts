import { Injectable, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('orderRepository')
    private orderRepository: typeof Order,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = new Order();
    order.userId = createOrderDto.userId; // по-хорошему userId нужно брать из токена, но в ТЗ был сделан акцент на то, что авторизация не нужна
    order.bookId = createOrderDto.bookId;
    return await order.save();
  }

  async findAll(userId?: number, bookId?: number) {
    if (userId)
      return await this.orderRepository.findAll({ where: { userId } });
    if (bookId)
      return await this.orderRepository.findAll({ where: { bookId } });
    return await this.orderRepository.findAll();
  }

  async findOne(id: number) {
    return await this.orderRepository.findOne({ where: { id } });
  }
}
