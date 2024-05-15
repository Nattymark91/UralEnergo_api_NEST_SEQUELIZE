import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDto {

  @ApiProperty({ example: 'Сказки', description: 'Название книги' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '1', description: 'ID автора книги' })
  @IsNotEmpty()
  @IsNumber()
  authorId: number;
}
