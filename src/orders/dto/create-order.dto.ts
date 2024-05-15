import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {

  @ApiProperty({ example: '1', description: 'ID пользователя' })
  @IsNotEmpty()
  userId: number;
  
  @ApiProperty({ example: '1', description: 'ID книги' })
  @IsNotEmpty()
  bookId: number;
}
