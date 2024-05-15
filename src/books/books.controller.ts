import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiBody, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('Книги')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({
    status: 201,
    description: 'Книга добавлена'
  })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Получение списка всех книг',
  })
  @ApiQuery({ name: 'title', required: false })
  @ApiQuery({ name: 'author', required: false })
  findAll(@Query('title') title?: string, @Query('author') authorId?: number) {
    return this.booksService.findAll(title, authorId);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Получение данных об одной книги по ID'
  })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Книга удалена'
  })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
