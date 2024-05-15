import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО пользователя',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'ivanov@email.ru',
    description: 'Электронная почта пользователя',
  })
  @IsNotEmpty()
  email: string;
}
