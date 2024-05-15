import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {

  @ApiProperty({ example: 'Ганс Христиан Андерсе', description: 'ФИО автора' })
  @IsNotEmpty()
  name: string;
}

