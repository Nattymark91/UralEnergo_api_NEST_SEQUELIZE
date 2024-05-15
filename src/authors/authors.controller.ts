import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Авторы')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiBody({ type: CreateAuthorDto })
  @ApiResponse({
    status: 201,
    description: 'Автор добавлен'
  })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Получение списка всех авторов'
  })
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Получение информации об одном авторе по ID'
  })
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }ы
}
