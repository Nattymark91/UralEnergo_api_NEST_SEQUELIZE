import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiBody, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('Заказы')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: 'Заказ добавлен'
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Получение списка всех заказов'
  })
  @ApiQuery({ name: 'user', required: false })
  @ApiQuery({ name: 'book', required: false })
  findAll(@Query('user') userId?: number, @Query('book') bookId?: number) {
    return this.ordersService.findAll(userId, bookId);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Получение информации об одном заказе по ID'
  })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
}
